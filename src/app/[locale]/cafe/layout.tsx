
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function CafeLayout({
    children,
    params
}: Props) {
    const { locale } = await params;

    return (
        <>
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer locale={locale} />
        </>
    );
}
