export default function proxyRequest(request: Request) {
	const url = new URL(request.url);

	const proxyUrl = url.searchParams.get('proxyUrl');

	if (!proxyUrl) {
		return new Response('Bad request: Missing `proxyUrl` query param', { status: 400 });
	}

	url.searchParams.delete('proxyUrl');
	const newUrl = `${proxyUrl}?${url.searchParams.toString()}`;

	return fetch(newUrl, request);
}
