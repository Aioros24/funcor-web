import https from 'https';

export default function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const code = url.searchParams.get('code');

  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(500).end(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="utf-8">
        <title>Error de Configuración - FUNCOR OAuth</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; text-align: center; padding-top: 50px; background: #fff5f5; color: #2d3748; }
          .container { display: inline-block; background: white; border: 1px solid #fed7d7; padding: 32px; border-radius: 16px; max-width: 500px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); text-align: left; }
          h3 { color: #c53030; margin-top: 0; font-size: 20px; }
          p { font-size: 14px; line-height: 1.6; color: #4a5568; }
          code { background: #edf2f7; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 13px; color: #c53030; }
        </style>
      </head>
      <body>
        <div class="container">
          <h3>⚠️ Error de Configuración de OAuth</h3>
          <p>Faltan las variables de entorno obligatorias <code>OAUTH_CLIENT_ID</code> o <code>OAUTH_CLIENT_SECRET</code> en el servidor de Vercel.</p>
          <p>Por favor configúralas en la sección de Variables de Entorno de tu proyecto en Vercel.</p>
        </div>
      </body>
      </html>
    `);
    return;
  }

  if (!code) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(400).end(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="utf-8">
        <title>Error de Código - FUNCOR OAuth</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; text-align: center; padding-top: 50px; background: #fff5f5; color: #2d3748; }
          .container { display: inline-block; background: white; border: 1px solid #fed7d7; padding: 32px; border-radius: 16px; max-width: 500px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); text-align: left; }
          h3 { color: #c53030; margin-top: 0; font-size: 20px; }
          p { font-size: 14px; line-height: 1.6; color: #4a5568; }
        </style>
      </head>
      <body>
        <div class="container">
          <h3>⚠️ Código de Autorización Faltante</h3>
          <p>No se recibió el código de autorización temporal de GitHub OAuth. Por favor, intenta iniciar sesión de nuevo en el panel de control.</p>
        </div>
      </body>
      </html>
    `);
    return;
  }

  const postData = JSON.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    code: code
  });

  const options = {
    hostname: 'github.com',
    port: 443,
    path: '/login/oauth/access_token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const request = https.request(options, (response) => {
    let body = '';
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      body += chunk;
    });

    response.on('end', () => {
      try {
        const data = JSON.parse(body);
        const token = data.access_token;

        if (!token) {
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.status(400).end(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
              <meta charset="utf-8">
              <title>Error de Autenticación</title>
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; text-align: center; padding-top: 50px; background: #fff5f5; color: #2d3748; }
                .container { display: inline-block; background: white; border: 1px solid #fed7d7; padding: 32px; border-radius: 16px; max-width: 500px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); text-align: left; }
                h3 { color: #c53030; margin-top: 0; font-size: 20px; }
                p { font-size: 14px; line-height: 1.6; color: #4a5568; }
                pre { background: #edf2f7; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; overflow-x: auto; color: #2d3748; border: 1px solid #e2e8f0; }
              </style>
            </head>
            <body>
              <div class="container">
                <h3>⚠️ Error Obteniendo Token</h3>
                <p>GitHub no devolvió un token de acceso válido. Por favor verifica que tu Client Secret sea correcto y vigente.</p>
                <p>Respuesta recibida:</p>
                <pre>${JSON.stringify(data, null, 2)}</pre>
              </div>
            </body>
            </html>
          `);
          return;
        }

        const responseData = {
          token: token,
          provider: 'github'
        };

        const html = `
          <!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="utf-8">
            <title>Autenticado con Éxito</title>
            <script>
              (function() {
                function recieveMessage(e) {
                  window.opener.postMessage(
                    'authorization:github:success:${JSON.stringify(responseData)}',
                    e.origin
                  );
                }
                window.addEventListener("message", recieveMessage, false);
                // Trigger authorizing message
                window.opener.postMessage("authorizing:github", "*");
              })()
            </script>
          </head>
          <body style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;text-align:center;padding-top:40px;color:#333;background:#fafafa;">
            <div style="background:#f0fdf4;border:1px solid #bbf7d0;padding:24px;border-radius:16px;display:inline-block;max-width:320px;box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1);">
              <h3 style="color:#166534;margin-top:0;">¡Autenticado con Éxito!</h3>
              <p style="font-size:14px;color:#4b5563;line-height:1.5;margin-bottom:0;">Esta ventana se cerrará automáticamente en unos segundos para redirigirte a tu panel administrativo de FUNCOR.</p>
            </div>
            <script>
              setTimeout(function() {
                window.close();
              }, 1500);
            </script>
          </body>
          </html>
        `;

        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.status(200).end(html);

      } catch (err) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.status(500).end(`<h3>Error de procesamiento del token de GitHub:</h3><pre>${err.message}</pre>`);
      }
    });
  });

  request.on('error', (err) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(500).end(`<h3>Error de conexión HTTPS con GitHub:</h3><pre>${err.message}</pre>`);
  });

  request.write(postData);
  request.end();
}
