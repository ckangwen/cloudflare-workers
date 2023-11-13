import handleProxy from './libs/proxy';
import handleRedirect from './libs/redirect';

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);

		switch (url.pathname) {
			case '/redirect':
				return handleRedirect(request);

			case '/proxy':
				return handleProxy(request);
		}

		return new Response(
			`Try making requests to:
      <ul>
      <li><code><a href="">/redirect?redirectUrl=https://example.com/</a></code>,</li>
      <li><code><a href="/proxy?modify&proxyUrl=https://example.com/">/proxy?modify&proxyUrl=https://example.com/</a></code>, or</li>`,
			{ headers: { 'Content-Type': 'text/html' } }
		);
	},
};
