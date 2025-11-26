"use client";

import Link from "next/link";

/**
 * Renders the license page for the OpenBalti project.
 * It provides detailed information about the MIT License under which the software is distributed,
 * as well as guidelines on contributions, branding, and third-party content.
 *
 * @returns {JSX.Element} The rendered license page.
 */
export default function LicensePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-300">
      <Link
        href="/"
        className="text-sm text-blue-400 hover:text-blue-300 transition"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mt-6 mb-2 text-white">License</h1>
      <p className="text-sm text-gray-400 mb-8">
        Effective Date: April 30, 2025
      </p>

      <p className="mb-8">
        OpenBalti is an open-source project dedicated to preserving and
        promoting the Balti language. This page explains how the project’s code,
        content, and brand can be used.
      </p>

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            1. License Type
          </h2>
          <p className="mb-3">
            Unless otherwise stated, all source code for OpenBalti is licensed
            under the <strong>MIT License</strong>. You’re free to use, modify,
            and distribute the software as long as you include the original
            copyright and license notice.
          </p>
          <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto text-sm">
{`MIT License

Copyright (c) 2025 Dilshad Hussain

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.`}
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            2. Third-Party Content
          </h2>
          <p>
            Some assets (e.g., fonts, icons, or libraries) used in OpenBalti may
            have their own licenses. Please follow the license terms of any
            third-party resource included in the project.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            3. Contributions
          </h2>
          <p>
            By contributing to OpenBalti, you agree that your contributions will
            be released under the same <strong>MIT License</strong>. You retain
            copyright of your work while granting OpenBalti the right to use,
            modify, and distribute it as part of the project.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            4. Branding and Name Usage
          </h2>
          <p>
            The <strong>OpenBalti</strong> name and logo are part of the
            project’s identity. You may not use them for unrelated projects,
            products, or commercial purposes without permission. Forks or
            derivative projects should remove or modify branding to avoid
            confusion with the official version.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">5. Disclaimer</h2>
          <p>
            OpenBalti is provided “as is” with no warranties, express or
            implied. We are not responsible for any damages, data loss, or
            issues arising from the use or misuse of this software.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">6. Contact</h2>
          <p>
            For questions about licensing or permissions, please contact us at{" "}
            <a
              href="mailto:contact@openbalti.vercel.app"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              contact@openbalti.vercel.app
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
