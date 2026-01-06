import { PageLayout } from "@/components/shared/PageLayout";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { TrackedPhone } from "@/components/shared/TrackedPhone";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Privacy = () => {
  const location = useLocation();
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "How Coffey Agencies collects, uses, and protects your personal information.",
    "url": "https://coffeyagencies.com/privacy",
    "dateModified": "2025-10-14"
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "name": "Breadcrumb Navigation",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://coffeyagencies.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://coffeyagencies.com/privacy"
      }
    ]
  };

  // Combine all schemas into a single @graph structure for reliable rendering
  const allSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      privacySchema,
      breadcrumbSchema
    ]
  };

  return (
    <PageLayout
      title="Privacy Policy"
      description="How Coffey Agencies collects, uses, and protects your personal information."
      breadcrumbs={[{ label: "Privacy Policy", href: "/privacy" }]}
    >
      <Helmet>
        <title>Privacy Policy | Coffey Agencies</title>
        <meta name="description" content="Read the Coffey Agencies privacy policy. Learn how we collect, use, and protect your personal information when you use our insurance services." />
        <link rel="canonical" href="https://coffeyagencies.com/privacy" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Privacy Policy | Coffey Agencies" />
        <meta property="og:description" content="Read the Coffey Agencies privacy policy. Learn how we collect, use, and protect your personal information when you use our insurance services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeyagencies.com/privacy" />
        <meta property="og:site_name" content="Coffey Agencies" />
        <meta property="og:image" content="https://coffeyagencies.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Coffey Agencies Inc." />
        <meta name="twitter:description" content="Privacy policy for Coffey Agencies Inc. Learn how we collect, use, and protect your personal information." />
        <meta name="twitter:image" content="https://coffeyagencies.com/og-image.jpg" />
        
        {/* Combined Schema Graph - All schemas in one JSON-LD block for reliable rendering */}
        <script type="application/ld+json">
          {JSON.stringify(allSchemas)}
        </script>
      </Helmet>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
            
            {/* Last Updated */}
            <p className="text-muted-foreground">
              Last updated: October 14, 2025
            </p>

            {/* Who We Are */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Who We Are</h2>
              <p className="text-foreground/90 leading-relaxed">
                Coffey Agencies Inc. ("Coffey Agencies," "we," "us," or "our") is a licensed insurance agency serving residents of Alabama and Georgia only. We operate the website coffeyagencies.com (the "Site") to help consumers request insurance quotes.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Category</TableHead>
                      <TableHead className="font-semibold">Examples</TableHead>
                      <TableHead className="font-semibold">Purpose</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Contact Information</TableCell>
                      <TableCell>Name, street address, ZIP code, email address, telephone number</TableCell>
                      <TableCell>To identify you, prepare an accurate quote, and communicate with you</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Quote Details</TableCell>
                      <TableCell>Vehicle, property, or risk information you voluntarily provide in forms or by phone/text</TableCell>
                      <TableCell>To obtain underwriting decisions and pricing</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Device & Usage Data</TableCell>
                      <TableCell>IP address, browser type, pages visited, cookies, Google Analytics data</TableCell>
                      <TableCell>To secure our Site, prevent fraud, and improve performance</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <p className="text-foreground/90 leading-relaxed mt-4">
                We do not knowingly collect information from children under 13.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed">
                <li>Prepare and deliver insurance quotes you request</li>
                <li>Submit your information to one or more underwriting companies so they can evaluate eligibility and price (see "How We Share Information")</li>
                <li>Communicate with you by phone, text, or email about your inquiry (see TCPA Consent below)</li>
                <li>Comply with legal obligations, including the Gramm-Leach-Bliley Act ("GLBA") and the Alabama & Georgia Insurance Data Security statutes based on the NAIC Model Law</li>
              </ul>
            </div>

            {/* How We Share Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Share Information</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Sharing Reason</TableHead>
                      <TableHead className="font-semibold">Who Receives It</TableHead>
                      <TableHead className="font-semibold">Can You Limit?</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Underwriting & policy servicing</TableCell>
                      <TableCell>Licensed insurance carriers, reinsurers, inspection vendors</TableCell>
                      <TableCell>No – sharing is required to give you a quote or policy</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Legal / regulatory</TableCell>
                      <TableCell>State Departments of Insurance, courts, law enforcement</TableCell>
                      <TableCell>No</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Service providers (IT, hosting, analytics)</TableCell>
                      <TableCell>Vendors bound by confidentiality agreements</TableCell>
                      <TableCell>Yes – you may opt out of non-essential analytics cookies</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <p className="text-foreground/90 leading-relaxed mt-4">
                We do not sell or rent your personal information, and we do not share it with non-affiliated third parties for their own marketing purposes.
              </p>
            </div>

            {/* Your Rights & Choices */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights & Choices</h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  <strong className="text-foreground">Review / Correct</strong> – Request a copy of the personal information we hold or ask us to correct inaccurate data.
                </p>
                <p>
                  <strong className="text-foreground">Delete / Limit Sharing</strong> – Ask us to delete information not required for current transactions or legal compliance, or to stop non-essential sharing.
                </p>
                <p>
                  <strong className="text-foreground">Marketing Opt-Out</strong> – Opt out of email marketing or analytics cookies at any time.
                </p>
                <p>
                  Contact us using the information in "How to Reach Us." We will honor verified requests within 30 days unless a longer period is permitted by law.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                We maintain a written, risk-based information-security program that includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 leading-relaxed">
                <li>SSL/TLS encryption for data in transit</li>
                <li>AES-256 encryption for data at rest</li>
                <li>Role-based access controls (staff access is limited to "need-to-know")</li>
                <li>Annual risk assessments and employee security training</li>
                <li>A documented incident-response plan, tested at least annually</li>
              </ul>
            </div>

            {/* Breach Notification Commitment */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Breach Notification Commitment</h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                If we discover a breach involving unencrypted personal information, we will:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-foreground/90 leading-relaxed">
                <li>Notify affected consumers without unreasonable delay, and</li>
                <li>Notify the Alabama or Georgia Insurance Commissioner and any other required regulators within three (3) business days or such shorter period as the applicable statute requires.</li>
              </ol>
            </div>

            {/* TCPA Consent */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">TCPA Consent (Phone & Text)</h2>
              <p className="text-foreground/90 leading-relaxed">
                By providing your telephone number, you expressly consent to Coffey Agencies and its representatives contacting you via call or SMS for transactional, informational, or marketing purposes. Message and data rates may apply. You may revoke consent at any time by replying STOP or contacting us as set out below.
              </p>
            </div>

            {/* Cookies & Similar Technologies */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies & Similar Technologies</h2>
              <p className="text-foreground/90 leading-relaxed">
                We use first-party cookies and Google Analytics to understand how visitors use our Site. You can manage cookies through your browser settings. Disabling cookies may affect Site functionality.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-foreground/90 leading-relaxed">
                We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date and post the new version on the Site. Material changes will be highlighted for 30 days.
              </p>
            </div>

            {/* How to Reach Us */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">How to Reach Us</h2>
              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <p className="font-semibold text-foreground">
                  Coffey Agencies Inc.<br />
                  Attn: Privacy Officer
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Alabama Office (Primary):</p>
                    <p className="text-foreground/90 leading-relaxed">
                      1913 W Main St<br />
                      Centre, AL 35960<br />
                      Phone: <TrackedPhone
                        phone="(256) 927-6287"
                        phoneRaw="2569276287"
                        location="Centre, AL"
                        office="centre"
                        pageType="privacy"
                        pageUrl={location.pathname}
                        className="text-accent hover:underline"
                      >
                        256-927-6287
                      </TrackedPhone>
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-foreground mb-2">Georgia Office:</p>
                    <p className="text-foreground/90 leading-relaxed">
                      1703 Turner McCall Blvd<br />
                      Rome, GA 30161<br />
                      Phone: <TrackedPhone
                        phone="(706) 784-6511"
                        phoneRaw="7067846511"
                        location="Rome, GA"
                        office="rome"
                        pageType="privacy"
                        pageUrl={location.pathname}
                        className="text-accent hover:underline"
                      >
                        706-784-6511
                      </TrackedPhone>
                    </p>
                  </div>
                </div>
                
                <p className="text-foreground/90">
                  Email: <a href="mailto:privacy@coffeyagencies.com" className="text-accent hover:underline">privacy@coffeyagencies.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;
