export default function handler(req, res) {
  const clientId = process.env.OAUTH_CLIENT_ID;

  if (!clientId) {
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
          ul { padding-left: 20px; font-size: 13px; color: #4a5568; }
          li { margin-bottom: 6px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h3>⚠️ Error de Configuración de OAuth</h3>
          <p>No se ha configurado la variable de entorno obligatoria <code>OAUTH_CLIENT_ID</code> en el servidor de Vercel.</p>
          <p><strong>Para solucionar esto:</strong></p>
          <ul>
            <li>Ve al panel de control de tu proyecto en <strong>Vercel</strong>.</li>
            <li>Navega a <strong>Settings &gt; Environment Variables</strong>.</li>
            <li>Agrega la variable <code>OAUTH_CLIENT_ID</code> con el Client ID de tu aplicación de GitHub OAuth.</li>
            <li>Agrega también <code>OAUTH_CLIENT_SECRET</code> con el Client Secret correspondiente.</li>
            <li>Vuelve a desplegar o reinicia tu servidor para que los cambios surtan efecto.</li>
          </ul>
        </div>
      </body>
      </html>
    `);
    return;
  }

  const state = Math.random().toString(36).substring(2, 15);
  const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo&state=${state}`;

  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
