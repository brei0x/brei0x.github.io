import Link from "next/link";
import {Github, Linkedin, Server, Code2, Database, Wrench, ArrowUpRight} from "lucide-react";
import MouseSpotlight from "@/components/ui/MouseSpotlight";
import MobileNav from "@/components/ui/MobileNav";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-12 md:py-10 lg:px-24 lg:pt-0 lg:pb-10 max-w-screen-xl mx-auto">
      <div className="lg:flex lg:justify-between lg:gap-4">

        {/* Left Section: Sticky Header */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">Breith Barbot</h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-teal-400 sm:text-xl">CTO hands-on / Lead Full Stack / DevOps</h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-400">J'aligne développement et architecture cloud sur vos enjeux business.</p>

            {/* Quick Navigation */}
            <nav className="nav hidden lg:block" aria-label="Navigation rapide">
              <ul className="mt-16 w-max">
                <li>
                  <a className="group flex items-center py-3 active" href="#about">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-400 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">À propos</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#experience">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-400 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Expérience</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#skills">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-400 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Compétences</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#contact">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-400 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <ul className="ml-1 mt-8 flex items-center" aria-label="Réseaux sociaux">
            <li className="mr-5 text-xs">
              <Link href="https://github.com/brei0x" target="_blank" rel="noreferrer" className="block hover:text-slate-200" aria-label="GitHub">
                <Github className="h-6 w-6"/>
              </Link>
            </li>
            <li className="mr-5 text-xs">
              <Link href="https://www.linkedin.com/in/breithbarbot" target="_blank" rel="noreferrer" className="block hover:text-slate-200" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6"/>
              </Link>
            </li>
          </ul>
        </header>

        {/* Right Section: Scrollable Content */}
        <div className="pt-24 lg:w-1/2 lg:py-24">

          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="À propos">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">À propos</h2>
            </div>
            <div className="text-slate-400 space-y-4">
              <p className="pb-10 leading-relaxed"><strong className="font-medium text-slate-200">Fort de plus de 10 ans d'expérience hands-on</strong>, j'allie développement web et culture DevOps à la gestion d'équipes techniques. Toujours à l'affût des innovations, je m'attache à aligner la technologie sur vos objectifs business pour bâtir des solutions efficaces et pérennes.</p>
              <p className="pb-10">Mon approche repose sur une <strong className="font-medium text-slate-200">compréhension fine entre les objectifs business et les besoins techniques</strong>. Autodidacte et rigoureux, je gère l'intégralité des outils techniques d'une entreprise, de l'infrastructure Cloud au parc informatique.</p>
              <div>
                <h3 className="text-slate-200 font-semibold mb-2">Mes atouts clés :</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Compréhension des enjeux stratégiques</li>
                  <li>Sens de l'organisation & Gestion Agile</li>
                  <li>Gestion complète des outils techniques</li>
                  <li>Veille technologique (IA, DevOps, Securité)</li>
                  <li>Autodidacte & Vulnérabilités tech</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Expérience Professionnelle">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Expérience</h2>
            </div>
            <ol className="group/list">
              {/* Job 4 */}
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 à aujourd'hui">
                    Juil. 2018 - Présent
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <span className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></span>
                        <span className="relative inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">CTO (Directeur technique) - Emprunte Mon Toutou
                        </span>
                      </div>
                    </h3>
                    <p className="relative mt-2 text-sm leading-normal text-slate-400">
                      Développement d'une plateforme de mise en relation dédiée au secteur animalier.
                      Gestion complète du pôle technique : choix architecturaux, management d'équipe agile, et administration système.
                      En tant que DPO, j'assure la sécurité des données et l'analyse des risques.
                    </p>
                    <ul className="relative mt-2 flex flex-wrap" aria-label="Technologies utilisées">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Lead Full Stack</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">App Mobile / Web</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">DevOps</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Vue.js / Next.js</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">DPO</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Job 3 */}
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2020 à 2021">
                    Oct. 2020 - Mai 2021
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <span className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></span>
                        <span className="relative inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                           CTO (Directeur technique) - Animal Privé
                        </span>
                      </div>
                    </h3>
                    <div className="relative mt-2 text-sm leading-normal text-slate-400 space-y-2">
                      <p>Développement d'une plate-forme de vente en ligne.</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Choix et validation technique</li>
                        <li>Administration système et réseau</li>
                      </ul>
                    </div>
                    <ul className="relative mt-2 flex flex-wrap" aria-label="Technologies utilisées">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">E-commerce</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Prestashop</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">DevOps</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Job 2 */}
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2014 à 2018">
                    Avril 2014 - Juin 2018
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <span className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></span>
                        <span className="relative inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                           Lead Full Stack - Iwit Systems
                        </span>
                      </div>
                    </h3>
                    <div className="relative mt-2 text-sm leading-normal text-slate-400 space-y-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Développement d'application/site web</li>
                        <li>Administration des serveurs</li>
                        <li>Support technique (informatique et réseau)</li>
                      </ul>
                    </div>
                    <ul className="relative mt-2 flex flex-wrap" aria-label="Technologies utilisées">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Full Stack</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">DevOps</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Support IT</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Job 1 - Internships */}
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2011 à 2013">
                    2011 - 2013
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <span className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></span>
                        <span className="relative inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">
                           Expériences précédentes
                        </span>
                      </div>
                    </h3>
                    <div className="relative mt-2 text-sm leading-normal text-slate-400 space-y-3">
                      <div>
                        <strong className="text-slate-200">Développeur web (stagiaire) - ADULLACT</strong>
                        <p>Création et intégration d'une charte graphique pour l'habillage des tableaux de bord d'un logiciel de gestion de délibérations.</p>
                      </div>
                      <div>
                        <strong className="text-slate-200">Graphiste (stagiaire) - BeeCee Agency</strong>
                        <p>Conception de logos, maquettes web, supports publicitaires (bannières, enseignes), cartes de visite, ainsi que production de vidéos promotionnelles.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>

            <div className="mt-12 text-right">
              <Link href="/cv_breith_barbot.pdf" target="_blank" className="inline-flex items-center leading-tight text-slate-200 font-semibold group hover:text-teal-300 transition-colors">
                Voir le CV complet <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/>
              </Link>
            </div>
          </section>

          <section id="skills" className="mb-16 scroll-mt-16 md:mb-0 lg:scroll-mt-24" aria-label="Compétences Techniques">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Compétences</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Card 1 */}
              <div className="rounded-md border border-slate-800 bg-slate-900/50 p-6 transition hover:border-teal-500/50 hover:bg-slate-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="h-6 w-6 text-teal-400"/>
                  <h3 className="font-semibold text-slate-200">Stack Backend & Web</h3>
                </div>
                <ul className="list-disc list-inside text-sm text-slate-400 space-y-2">
                  <li>PHP (Symfony / API Platform)</li>
                  <li>JavaScript / TypeScript (Vue.js, Next.js)</li>
                  <li>Python, HTML, CSS (Tailwind CSS, Bootstrap)</li>
                  <li>API REST & FrankenPHP</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="rounded-md border border-slate-800 bg-slate-900/50 p-6 transition hover:border-teal-500/50 hover:bg-slate-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="h-6 w-6 text-teal-400"/>
                  <h3 className="font-semibold text-slate-200">Infrastructure & Cloud</h3>
                </div>
                <ul className="list-disc list-inside text-sm text-slate-400 space-y-2">
                  <li>AWS & GCP (Compute, SQL, Storage...)</li>
                  <li>Docker, Terraform, Ansible</li>
                  <li>Linux (Debian/Ubuntu), Nginx, SSH</li>
                  <li>Cloudflare, OVH, Gandi, Vercel, Hostinger</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="rounded-md border border-slate-800 bg-slate-900/50 p-6 transition hover:border-teal-500/50 hover:bg-slate-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-6 w-6 text-teal-400"/>
                  <h3 className="font-semibold text-slate-200">Data & Ecosystème</h3>
                </div>
                <ul className="list-disc list-inside text-sm text-slate-400 space-y-2">
                  <li>SQL (MySQL, MariaDB, PostgreSQL, SQLite)</li>
                  <li>NoSQL (MongoDB, Redis), BigQuery</li>
                  <li>WordPress, Prestashop</li>
                  <li>SaaS (Stripe, Brevo, Atlassian, Sentry...)</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="rounded-md border border-slate-800 bg-slate-900/50 p-6 transition hover:border-teal-500/50 hover:bg-slate-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="h-6 w-6 text-teal-400"/>
                  <h3 className="font-semibold text-slate-200">Outils, Qualité & DevOps</h3>
                </div>
                <ul className="list-disc list-inside text-sm text-slate-400 space-y-2">
                  <li>Git, GitHub, GitLab, CI/CD</li>
                  <li>Postman, JetBrains, Datadog</li>
                  <li>Qualité : PHPStan, ESLint, Prettier, CodeSniffer</li>
                  <li>Dossiers CIR/CII, Auth. email</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="contact" className="mt-16 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Contact">
        <div className="rounded-2xl bg-gradient-to-br from-teal-900/20 to-slate-900 p-8 md:p-12 border border-slate-800 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-100 mb-6">Prêt à collaborer ?</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">Je suis toujours ouvert aux discussions sur l'innovation technologique et les défis architecturaux. N'hésitez pas à me contacter pour discuter de votre projet.</p>
          <Link
            href="https://www.linkedin.com/in/breithbarbot"
            className="inline-flex items-center justify-center rounded-md bg-teal-500 px-8 py-4 text-lg font-medium text-slate-950 transition hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            target="_blank"
            title="Contactez-moi sur LinkedIn">
            Me contacter
          </Link>
        </div>
      </section>

      <footer className="text-sm text-center text-slate-500">
        <p>
          Built with <span className="text-slate-200">Next.js</span> and <span className="text-slate-200">Tailwind CSS</span>
          <span className="mx-2">•</span>
          <Link
            href="https://github.com/brei0x/brei0x.github.io"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 transition-colors underline decoration-transparent hover:decoration-teal-300 underline-offset-4"
          >
            Source code available on GitHub
          </Link>
        </p>
      </footer>

      {/* Quick Navigation - Mobile */}
      <MobileNav/>

      <MouseSpotlight/>
    </main>
  );
}
