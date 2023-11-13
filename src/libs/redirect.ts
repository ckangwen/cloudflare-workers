export default function redirectRequest(request: Request) {
	const url = new URL(request.url);
	const redirectUrl = url.searchParams.get('redirectUrl');

	if (!redirectUrl) {
		return new Response('Bad request: Missing `redirectUrl` query param', { status: 400 });
	}

	url.searchParams.delete('redirectUrl');
	const newUrl = `${redirectUrl}?${url.searchParams.toString()}`;

	return Response.redirect(newUrl);
}
