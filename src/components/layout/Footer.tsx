import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">Dua Pilar Raya</h3>
                        <p className="text-muted-foreground max-w-sm">
                            Providing top-tier Building Automation Systems, Fire Alarm solutions, and PABX services.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/experience" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Experience
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>Ginta Building, Teratai Putih Raya 1A/14C Kel. Malaka Sari, Kec. Duren Sawit, East Jakarta Indonesia</li>
                            <li>info@duapilarraya.com</li>
                            <li>+(62) 812 1234 5678</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Dua Pilar Raya. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
