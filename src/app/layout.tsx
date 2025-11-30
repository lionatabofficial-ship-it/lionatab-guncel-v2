import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";

export const metadata: Metadata = {
	title: "LionaTab - Güzellik Salonu Randevu Sistemi | CRM ve Toplu Mesaj",
	description: "Güzellik salonları için online randevu, CRM, WhatsApp entegrasyonu ve toplu mesaj sistemi. 14 gün ücretsiz deneyin!",
	keywords: ["güzellik salonu yazılımı", "kuaför randevu sistemi", "salon CRM", "toplu mesaj gönderme", "WhatsApp entegrasyonu", "online randevu"],
	authors: [{ name: "LionaTab" }],
	openGraph: {
		title: "LionaTab - Güzellik Salonu Randevu Sistemi",
		description: "Güzellik salonları için online randevu, CRM, WhatsApp entegrasyonu ve toplu mesaj sistemi",
		url: "https://lionatab.com",
		siteName: "LionaTab",
		locale: "tr_TR",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="tr">
			<head>
				{/* Google Fonts */}
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>

				{/* Google Analytics */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-BQ4GND6CBS"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-BQ4GND6CBS');
					`}
				</Script>

				{/* CollectAction Script */}
				<Script id="collectaction" strategy="afterInteractive">
					{`
						(function (d,s,i) {
							var j = d.createElement('script');
							j.async = true;
							j.id = 'ytag';
							j.src = 'https://cdn.yapaytech.com/ytag/script.js';
							j.setAttribute('pid',i);
							d.head.appendChild(j);
						})(document, 'script', '01c67ae9-d6a4-492f-9513-5c9b0e24b2cb');
					`}
				</Script>

				{/* DialogTab Live Chat */}
				<Script id="dialogtab" strategy="lazyOnload">
					{`
						window.DialogTab||(function(d,c,script){
							d.getElementById(c)||(script=d.createElement('script'),
							script.id=c,script.async=true,
							script.src='//cdn.dialogtab.com/live/slim.js',
							script.onload=function(){
							new DialogTab().init({pid:'9cef0590-c657-11f0-ad87-ed8ae689789a'})},
							d.getElementsByTagName('head')[0].appendChild(script))
						})(document,'DialogTab');
					`}
				</Script>
			</head>
			<body className="antialiased bg-gray-50">
				<LanguageProvider>
					{children}
				</LanguageProvider>
			</body>
		</html>
	);
}
