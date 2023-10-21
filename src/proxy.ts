export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);

		const proxyUrl = url.searchParams.get('proxyUrl');

		if (!proxyUrl) {
			return new Response('Bad request: Missing `proxyUrl` query param', { status: 400 });
		}

		return fetch(proxyUrl, request);
	},
};
