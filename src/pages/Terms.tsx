import { Helmet } from "react-helmet";
import { PageLayout } from "@/components/shared/PageLayout";

const Terms = () => {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "Terms and conditions for using the Coffey Agencies website.",
    "url": "https://coffeyagencies.com/terms",
    "dateModified": "2025-10-14"
  };

  return (
    <PageLayout
      title="Terms of Service"
      description="Terms and conditions for using the Coffey Agencies website."
      breadcrumbs={[{ label: "Terms of Service", href: "/terms" }]}
    >
      <Helmet>
        <link rel="canonical" href="https://coffeyagencies.com/terms" />
        <script type="application/ld+json">
          {JSON.stringify(termsSchema)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-sm text-muted-foreground">
          Last updated: October 14, 2025
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
          <p className="text-foreground/90 leading-relaxed">
            By accessing coffeyagencies.com (the "Site"), you agree to these Terms of Service ("Terms"). If you do not agree, do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Role</h2>
          <p className="text-foreground/90 leading-relaxed">
            Coffey Agencies Inc. is an exclusive insurance agency representing a single A+-rated national insurance carrier. We are not a broker that compares multiple companies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">No Coverage Bound Online</h2>
          <p className="text-foreground/90 leading-relaxed">
            No coverage, policy change, or claim is bound, amended, or reported via this Site or by email or voicemail. Coverage is effective only after we confirm acceptance in writing and the insurer issues a policy or endorsement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Quotes & Illustrations</h2>
          <p className="text-foreground/90 leading-relaxed">
            Information on this Site, including quote estimates, is subject to underwriting approval, policy terms, state availability, and applicable law. We do not guarantee that any consumer will qualify for a given rate or coverage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Service Area</h2>
          <p className="text-foreground/90 leading-relaxed">
            Our products and services are offered only to residents of Alabama and Georgia. By using the Site, you represent that you are a legal resident of one of these states.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
          <p className="text-foreground/90 leading-relaxed">
            All content, logos, graphics, and software on the Site are the property of Coffey Agencies Inc. or its licensors and are protected by U.S. copyright and trademark laws. You may not copy, modify, or distribute any part of the Site without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">User Conduct</h2>
          <p className="text-foreground/90 leading-relaxed mb-3">
            You agree not to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed">
            <li>Use the Site for any unlawful purpose;</li>
            <li>Submit false or misleading information;</li>
            <li>Attempt to gain unauthorized access to our systems;</li>
            <li>Reverse-engineer or scrape Site content.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
          <p className="text-foreground/90 leading-relaxed">
            To the fullest extent permitted by law, Coffey Agencies Inc. will not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Site or inability to obtain coverage, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
          <p className="text-foreground/90 leading-relaxed">
            The Site and its content are provided "as is" and "as available." We disclaim all warranties, express or implied, including any warranty of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
          <p className="text-foreground/90 leading-relaxed">
            You agree to indemnify and hold Coffey Agencies Inc., its officers, and employees harmless from any claim or demand arising out of your misuse of the Site or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Governing Law & Venue</h2>
          <p className="text-foreground/90 leading-relaxed">
            These Terms are governed by the laws of the State of Alabama without regard to its conflict-of-law principles. Any dispute will be resolved in a state or federal court located in Cherokee County, Alabama.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
          <p className="text-foreground/90 leading-relaxed">
            We may modify these Terms at any time. Continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-foreground/90 leading-relaxed">
            Questions? Contact us at{" "}
            <a 
              href="mailto:info@coffeyagencies.com" 
              className="text-accent hover:underline"
            >
              info@coffeyagencies.com
            </a>{" "}
            or the postal address listed in our Privacy Policy.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Terms;
