import { LanguageProvider } from "@/context/LanguageContext";
import type { Language } from "@/lib/translations";

export default async function LangLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: Language }>;
}) {
	const { lang } = await params;
	return (
		<LanguageProvider initialLang={lang}>
			{children}
		</LanguageProvider>
	);
}
