import { NextRequest, NextResponse } from 'next/server';

const locales = ['tr', 'en', 'de', 'ru', 'fr', 'es', 'ko', 'ar'];
const defaultLocale = 'tr';

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Check if the pathname already has a locale
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) return;

	// Redirect if there is no locale
	const locale = defaultLocale;
	request.nextUrl.pathname = `/${locale}${pathname}`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		// Skip all internal paths (_next, api, etc)
		'/((?!_next|api|favicon.ico|.*\\..*).*)',
	],
};
