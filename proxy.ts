import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)/;
const SUBDOMAINS = ['wizbowo']

export default function proxy(req: NextRequest) {
	if (PUBLIC_FILE.test(req.nextUrl.pathname) || req.nextUrl.pathname.includes('_next')) return NextResponse.next();
	
	const url = req.nextUrl.clone();
	const host = req.headers.get('host');

	if (host) {
		const subdomain = host.split(".")[0];
        const firstPath = url.pathname.split('/')[1];

        // block incorrect subdomain access
		if (SUBDOMAINS.includes(firstPath)) {
            return NextResponse.rewrite(new URL('/404', req.url))
        }

        // redirect correct subdomain access
		if (SUBDOMAINS.includes(subdomain)) {
			url.pathname = `/${subdomain}${url.pathname}`;
		}
	}

	return NextResponse.rewrite(url);
}