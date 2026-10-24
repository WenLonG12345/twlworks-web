import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { MetadataProps } from "@/constants/types";
import { localeAlternates, localizedPath } from "@/utils/seo";
import ContactClient from "./Contact";

export async function generateMetadata({
	params,
}: MetadataProps): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	return {
		title: t("contact.badge"),
		description: t("contact.seo_description"),
		alternates: localeAlternates(locale, "/contact"),
		openGraph: {
			type: "website",
			title: t("contact.title"),
			url: localizedPath(locale, "/contact"),
			description: t("contact.seo_description"),
			images: ["/og_image.png"],
		},
		twitter: {
			card: "summary_large_image",
			title: t("contact.title"),
			description: t("contact.seo_description"),
			images: ["/og_image.png"],
		},
	};
}

const ContactPage = () => {
	return <ContactClient />;
};

export default ContactPage;
