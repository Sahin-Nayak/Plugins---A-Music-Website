import { useState } from "react";

const TermsConditions = () => {
  const [activeTab, setActiveTab] = useState("tab_item_1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-5 bg-gray-900 ">
      <div className="flex w-full max-w-7xl h-[800px] bg-white rounded-lg overflow-hidden hover:border-2 hover:border-yellow-600">
        {/* Tabs List */} 
        <div className="w-1/3 bg-indigo-100 space-between ">
          <ul className="p-5 space-y-3 text-right ">
            <li
              className={`cursor-pointer pb-4 font-bold transition-all ${
                activeTab === "tab_item_1" ? "text-indigo-600" : "text-gray-800"
              }`}
              onClick={() => handleTabClick("tab_item_1")}
            >
              Terms of use
            </li>
            <li
              className={`cursor-pointer pb-4 font-bold transition-all ${
                activeTab === "tab_item_2" ? "text-indigo-600" : "text-gray-800"
              }`}
              onClick={() => handleTabClick("tab_item_2")}
            >
              Intellectual property rights
            </li>
            <li
              className={`cursor-pointer pb-4 font-bold transition-all ${
                activeTab === "tab_item_3" ? "text-indigo-600" : "text-gray-800"
              }`}
              onClick={() => handleTabClick("tab_item_3")}
            >
              Prohibited activities
            </li>
            <li
              className={`cursor-pointer pb-4 font-bold transition-all ${
                activeTab === "tab_item_4" ? "text-indigo-600" : "text-gray-800"
              }`}
              onClick={() => handleTabClick("tab_item_4")}
            >
              Termination clause
            </li>
            <li
              className={`cursor-pointer pb-4 font-bold transition-all ${
                activeTab === "tab_item_5" ? "text-indigo-600" : "text-gray-800"
              }`}
              onClick={() => handleTabClick("tab_item_5")}
            >
              Governing law
            </li>
          </ul>
        </div>

        {/* Tabs Content */}
        <div className="w-2/3 p-5">
          <div className="text-center mb-5">
            <h2 className="text-indigo-600">Terms & Conditions</h2>
          </div>
          <div className="overflow-y-auto h-[calc(100%-140px)]">
            {activeTab === "tab_item_1" && (
              <div>
                <h className="text-indigo-600">Terms of use</h>
                <p>
                Welcome to Plugins, an audio streaming platform that allows users to enjoy a vast range of music and audio content. By accessing or using our service, you agree to comply with the following Terms of Use. Please read these terms carefully before using our website and services.
                  <br /><br />
                <b>1. Acceptance of Terms </b>   <br /> 
                By accessing or using the services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree, you must not access the service.
                   <br /><br />
                <b>2. Changes to the Terms</b>   <br />
                We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting. It is your responsibility to review the terms regularly. Continued use of the website after modifications constitutes your acceptance of the revised terms.
                <br /><br />
                <b>3. Eligibility</b>   <br />
                You must be at least 13 years old to use the website. If you are between 13 and 18, you may use the website only with the involvement of a parent or guardian who agrees to these terms.
                <br /><br />
                <b>4. User Account</b>   <br />
                To access certain features of the service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                <br /><br />
                <b>5. User Conduct</b>   <br />
                You agree to use the service for lawful purposes only. You are prohibited from:
                Uploading, posting, or transmitting any content that is unlawful, harmful, abusive, harassing, defamatory, or otherwise objectionable.
                Using the service to distribute viruses or other harmful computer code.
                Attempting to interfere with or disrupt the service or its servers.
                Engaging in any activity that may damage, disable, or impair the website’s functionality or security.

                <br /><br />

                <b>6. Intellectual Property Rights</b>   <br />
                All content available on the platform, including music, images, text, and software, is owned by [Website Name] or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content unless expressly permitted by us or the applicable rights holders.
                <br /><br />
                <b>7. License to Use</b>   <br />
                We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the service for personal, non-commercial use. This license does not grant you the right to use the platform for any other purpose, including commercial exploitation of the content.
                <br /><br />
                <b>8. Subscription and Payment</b>   <br />
                Certain features of the service may require a subscription. By subscribing, you agree to pay all applicable fees associated with your subscription plan. Subscription fees are non-refundable, except as required by law.
                <br /><br />
                <b>9. Cancellation of Subscription</b>   <br />
                You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of the current billing period, and you will retain access to the service until that time.
                <br /><br />
                <b>10. Content Licensing and Ownership</b>   <br />
                Users may upload or stream audio content to the platform. By submitting content, you grant [Website Name] a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content within the platform.
                <br /><br />
                <b>11. Content Removal</b>   <br />
                We reserve the right to remove any content that violates these terms or is otherwise deemed inappropriate. This includes content flagged by users as harmful or abusive.
                <br /><br />
                <b>12. Third-Party Services</b>   <br />
                The platform may contain links to third-party websites or services. We are not responsible for the content, policies, or practices of any third-party websites or services. Your use of third-party services is at your own risk.
                <br /><br />
                <b>13. Limitation of Liability</b>   <br />
                To the fullest extent permitted by law, [Website Name] is not liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of profits, data, or goodwill, resulting from your use of the service.
                <br /><br />
                <b>14. Disclaimers</b>   <br />
                We do not guarantee the accuracy, completeness, or reliability of any content provided through the platform. The service is provided "as is" without warranties of any kind, either express or implied. We disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                <br /><br />
                <b>15. Termination of Use</b>   <br />
                We may, at our sole discretion, terminate or suspend your account or access to the service for any reason, including breach of these terms. Upon termination, your right to use the service will immediately cease.
                <br /><br />
                <b>16. Privacy Policy</b>   <br />
                Your privacy is important to us. Please review our [Privacy Policy], which governs how we collect, use, and disclose your personal information.
                <br /><br />
                <b>17. Governing Law</b>   <br />
                These Terms of Use are governed by and construed in accordance with the laws of [Country/State]. You agree to submit to the jurisdiction of the courts located in [Location] for any legal proceedings.
                <br /><br />
                <b>18. Dispute Resolution</b>   <br />
                In the event of any dispute arising out of or in connection with these terms, the parties agree to first attempt to resolve the dispute through informal negotiation. If the dispute is not resolved within 30 days, it shall be referred to mediation or arbitration.
                <br /><br />
                <b>19. Indemnification</b>   <br />
                You agree to indemnify, defend, and hold harmless [Website Name], its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, or expenses arising from your use of the service or violation of these terms.
                <br /><br />
                <b>20. No Waiver</b>   <br />
                The failure of [Website Name] to enforce any right or provision of these terms shall not constitute a waiver of such right or provision.
                <br /><br />
                <b>21. Severability</b>   <br />
                If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable.
                <br /><br />
                <b>22. Contact Information</b>   <br />
                If you have any questions or concerns regarding these Terms of Use, please contact us at
                </p>
              </div>
            )}
            {activeTab === "tab_item_2" && (
              <div>
                <h3 className="text-indigo-600">Intellectual property rights</h3>
                <p>
                At Plugins, we respect the intellectual property rights of others and expect our users to do the same. All content, features, and functionality available on or through our platform are protected by intellectual property laws. This section outlines your rights and responsibilities with respect to the intellectual property associated with our service.
                <br /><br />
                <b>1. Ownership of Content</b> <br />
                All content, including but not limited to music, audio files, images, text, software, databases, and trademarks, available on or through the platform is the property of [Website Name], its licensors, or other content providers. This content is protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                <br /><br />
                <b>2. Limited License for Users</b> <br />
                Subject to compliance with these Terms of Use, Plugins grants users a limited, non-exclusive, non-transferable, and revocable license to access and use the content solely for personal, non-commercial use. This license does not allow you to:

                Reproduce, distribute, publicly perform, or publicly display any content.
                Modify or create derivative works based on the content.
                Use any content for commercial purposes without prior written permission from Plugins or the appropriate rights holders.
                <br /><br />
                <b>3. Copyright Ownership</b> <br />
                The content you access on the platform, including but not limited to songs, podcasts, playlists, and artist profiles, is the exclusive property of [Website Name] or its licensors. You may not copy, distribute, or make available any of this copyrighted material unless expressly permitted under the terms of a separate license.
                <br /><br />
                <b>4. Trademarks</b> <br />
                All trademarks, logos, service marks, and trade names displayed on the platform are the registered or unregistered marks of [Website Name] or its licensors. You may not use any of these marks without the prior written consent of [Website Name] or the appropriate rights holders. Unauthorized use of these trademarks is strictly prohibited.
                <br /><br />
                <b>5. User-Generated Content</b> <br />
                Users may have the ability to submit or upload content, including but not limited to audio files, playlists, comments, and artwork, to the platform. By submitting content, you represent and warrant that:

                You are the sole owner or have obtained all necessary rights, licenses, and permissions to use and share the content.
                The content does not infringe upon any third-party intellectual property rights, including copyright, trademark, patent, or trade secret rights.
                <br /><br />
                <b>6. License Grant for User-Generated Content</b> <br />
                By uploading or submitting content to the platform, you grant [Website Name] a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, display, and perform your content within the platform. This license allows us to promote, modify, or adapt your content in any format or medium for the purpose of operating and providing the service.
                <br /><br />
                <b>7. Responsibility for Infringing Content</b> <br />
                You are solely responsible for any content you upload, submit, or share through the platform. Plugins does not claim ownership over your content but reserves the right to remove any content that violates intellectual property laws or our Terms of Use. We are not liable for any infringing content uploaded by users.
                <br /><br />
                <b>8. Copyright Infringement Claims (DMCA Policy)</b> <br />
                We comply with the Digital Millennium Copyright Act (DMCA) and other similar international copyright laws. If you believe that your copyrighted work has been infringed on the platform, you may file a DMCA takedown notice with our designated Copyright Agent by providing the following information:

                A physical or electronic signature of the copyright owner or authorized agent.
                A description of the copyrighted work that has allegedly been infringed.
                A description of the infringing material and its location on the platform.
                Your contact information (address, phone number, and email).
                A statement that you believe in good faith that the use of the material is unauthorized.
                A statement, under penalty of perjury, that the information provided in the notification is accurate and that you are the copyright owner or authorized to act on behalf of the owner.
                <br /><br />
                <b>9. Repeat Infringer Policy</b> <br />
                Plugins reserves the right to terminate or suspend accounts of users who are found to be repeat infringers of intellectual property rights. We may also remove any content found to be in violation of copyright or intellectual property laws without prior notice.
                <br /><br />
                <b>10. Counter-Notification (For Alleged Infringers)</b> <br />
                If you believe that your content was removed due to a mistake or misidentification of material, you may submit a counter-notification to our Copyright Agent. The counter-notification must include:

                A statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located, or if you are outside of the U.S., that you consent to the jurisdiction of any judicial district in which [Website Name] may be found.
                A statement that you will accept service of process from the person who filed the original DMCA notice.
                A description of the content that was removed and its original location before removal.
                A statement under penalty of perjury that you have a good faith belief that the material was removed due to a mistake or misidentification.
                Your physical or electronic signature.
                <br /><br />
                <b>11. License Revocation</b> <br />
                The licenses granted by users to Plugins may be revoked upon request or by deleting your content from the platform. However, the revocation will not affect any rights already granted or exercised by [Website Name] prior to the deletion or removal of content.
                <br /><br />
                <b>12. Reporting Intellectual Property Infringement</b> <br />
                If you believe that any content available on the platform violates your intellectual property rights, please contact our Copyright Agent with a detailed description of the infringement. We take all intellectual property complaints seriously and will promptly investigate any allegations.
                <br /><br />
                <b>13. Penalties for Misuse</b> <br />
                Misuse of the intellectual property rights, including attempts to unlawfully access or distribute protected content, may result in legal action. [Website Name] reserves the right to pursue all legal remedies available to protect its intellectual property rights.
                <br /><br />
                <b>14. Third-Party Intellectual Property</b> <br />
                Certain content made available through the platform may include third-party intellectual property, such as music licensed by record labels or independent artists. You may not use, reproduce, or distribute such content unless explicitly authorized by the respective rights holders.
                <br /><br />
                <b>15. Content Disclaimer</b> <br />
                While we strive to ensure that all content available on the platform complies with intellectual property laws, [Website Name] does not warrant or guarantee the accuracy, completeness, or legality of any content provided by third-party licensors, partners, or users.
                <br /><br />
                <b>16. Enforcement of Intellectual Property Rights</b> <br />
                Plugins is committed to enforcing its intellectual property rights to the fullest extent of the law. This includes monitoring the platform for unauthorized use of copyrighted materials and taking appropriate legal action against infringers.
                <br /><br />
                <b>17. Modifications to Intellectual Property Rights Policy</b> <br />
                We reserve the right to modify this Intellectual Property Rights policy at any time. Changes will be effective immediately upon posting to the platform. It is your responsibility to regularly review this policy to stay informed about any updates.
                <br /><br />
                <b>18. Contact Information</b> <br />
                For any questions or concerns related to intellectual property rights or to report violations, please
                </p>
              </div>
            )}
            {activeTab === "tab_item_3" && (
              <div>
                <h3 className="text-indigo-600">Prohibited activities</h3>
                <p>
                Welcome to Plugins, an audio streaming platform that allows users to enjoy a vast range of music and audio content. By accessing or using our service, you agree to comply with the following Terms of Use. Please read these terms carefully before using our website and services.
                  <br /><br />
                <b>1. Acceptance of Terms </b>   <br /> 
                By accessing or using the services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree, you must not access the service.
                   <br /><br />
                <b>2. Changes to the Terms</b>   <br />
                We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting. It is your responsibility to review the terms regularly. Continued use of the website after modifications constitutes your acceptance of the revised terms.
                <br /><br />
                <b>3. Eligibility</b>   <br />
                You must be at least 13 years old to use the website. If you are between 13 and 18, you may use the website only with the involvement of a parent or guardian who agrees to these terms.
                <br /><br />
                <b>4. User Account</b>   <br />
                To access certain features of the service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                <br /><br />
                <b>5. User Conduct</b>   <br />
                You agree to use the service for lawful purposes only. You are prohibited from:
                Uploading, posting, or transmitting any content that is unlawful, harmful, abusive, harassing, defamatory, or otherwise objectionable.
                Using the service to distribute viruses or other harmful computer code.
                Attempting to interfere with or disrupt the service or its servers.
                Engaging in any activity that may damage, disable, or impair the website’s functionality or security.

                <br /><br />

                <b>6. Intellectual Property Rights</b>   <br />
                All content available on the platform, including music, images, text, and software, is owned by [Website Name] or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content unless expressly permitted by us or the applicable rights holders.
                <br /><br />
                <b>7. License to Use</b>   <br />
                We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the service for personal, non-commercial use. This license does not grant you the right to use the platform for any other purpose, including commercial exploitation of the content.
                <br /><br />
                <b>8. Subscription and Payment</b>   <br />
                Certain features of the service may require a subscription. By subscribing, you agree to pay all applicable fees associated with your subscription plan. Subscription fees are non-refundable, except as required by law.
                <br /><br />
                <b>9. Cancellation of Subscription</b>   <br />
                You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of the current billing period, and you will retain access to the service until that time.
                <br /><br />
                <b>10. Content Licensing and Ownership</b>   <br />
                Users may upload or stream audio content to the platform. By submitting content, you grant [Website Name] a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content within the platform.
                <br /><br />
                <b>11. Content Removal</b>   <br />
                We reserve the right to remove any content that violates these terms or is otherwise deemed inappropriate. This includes content flagged by users as harmful or abusive.
                <br /><br />
                <b>12. Third-Party Services</b>   <br />
                The platform may contain links to third-party websites or services. We are not responsible for the content, policies, or practices of any third-party websites or services. Your use of third-party services is at your own risk.
                <br /><br />
                <b>13. Limitation of Liability</b>   <br />
                To the fullest extent permitted by law, [Website Name] is not liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of profits, data, or goodwill, resulting from your use of the service.
                <br /><br />
                <b>14. Disclaimers</b>   <br />
                We do not guarantee the accuracy, completeness, or reliability of any content provided through the platform. The service is provided "as is" without warranties of any kind, either express or implied. We disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                <br /><br />
                <b>15. Termination of Use</b>   <br />
                We may, at our sole discretion, terminate or suspend your account or access to the service for any reason, including breach of these terms. Upon termination, your right to use the service will immediately cease.
                <br /><br />
                <b>16. Privacy Policy</b>   <br />
                Your privacy is important to us. Please review our [Privacy Policy], which governs how we collect, use, and disclose your personal information.
                <br /><br />
                <b>17. Governing Law</b>   <br />
                These Terms of Use are governed by and construed in accordance with the laws of [Country/State]. You agree to submit to the jurisdiction of the courts located in [Location] for any legal proceedings.
                <br /><br />
                <b>18. Dispute Resolution</b>   <br />
                In the event of any dispute arising out of or in connection with these terms, the parties agree to first attempt to resolve the dispute through informal negotiation. If the dispute is not resolved within 30 days, it shall be referred to mediation or arbitration.
                <br /><br />
                <b>19. Indemnification</b>   <br />
                You agree to indemnify, defend, and hold harmless [Website Name], its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, or expenses arising from your use of the service or violation of these terms.
                <br /><br />
                <b>20. No Waiver</b>   <br />
                The failure of [Website Name] to enforce any right or provision of these terms shall not constitute a waiver of such right or provision.
                <br /><br />
                <b>21. Severability</b>   <br />
                If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable.
                <br /><br />
                <b>22. Contact Information</b>   <br />
                If you have any questions or concerns regarding these Terms of Use, please contact us at
                </p>
              </div>
            )}
            {activeTab === "tab_item_4" && (
              <div>
                <h3 className="text-indigo-600">Termination clause</h3>
                <p>
                Welcome to Plugins, an audio streaming platform that allows users to enjoy a vast range of music and audio content. By accessing or using our service, you agree to comply with the following Terms of Use. Please read these terms carefully before using our website and services.
                  <br /><br />
                <b>1. Acceptance of Terms </b>   <br /> 
                By accessing or using the services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree, you must not access the service.
                   <br /><br />
                <b>2. Changes to the Terms</b>   <br />
                We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting. It is your responsibility to review the terms regularly. Continued use of the website after modifications constitutes your acceptance of the revised terms.
                <br /><br />
                <b>3. Eligibility</b>   <br />
                You must be at least 13 years old to use the website. If you are between 13 and 18, you may use the website only with the involvement of a parent or guardian who agrees to these terms.
                <br /><br />
                <b>4. User Account</b>   <br />
                To access certain features of the service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                <br /><br />
                <b>5. User Conduct</b>   <br />
                You agree to use the service for lawful purposes only. You are prohibited from:
                Uploading, posting, or transmitting any content that is unlawful, harmful, abusive, harassing, defamatory, or otherwise objectionable.
                Using the service to distribute viruses or other harmful computer code.
                Attempting to interfere with or disrupt the service or its servers.
                Engaging in any activity that may damage, disable, or impair the website’s functionality or security.

                <br /><br />

                <b>6. Intellectual Property Rights</b>   <br />
                All content available on the platform, including music, images, text, and software, is owned by [Website Name] or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content unless expressly permitted by us or the applicable rights holders.
                <br /><br />
                <b>7. License to Use</b>   <br />
                We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the service for personal, non-commercial use. This license does not grant you the right to use the platform for any other purpose, including commercial exploitation of the content.
                <br /><br />
                <b>8. Subscription and Payment</b>   <br />
                Certain features of the service may require a subscription. By subscribing, you agree to pay all applicable fees associated with your subscription plan. Subscription fees are non-refundable, except as required by law.
                <br /><br />
                <b>9. Cancellation of Subscription</b>   <br />
                You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of the current billing period, and you will retain access to the service until that time.
                <br /><br />
                <b>10. Content Licensing and Ownership</b>   <br />
                Users may upload or stream audio content to the platform. By submitting content, you grant [Website Name] a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content within the platform.
                <br /><br />
                <b>11. Content Removal</b>   <br />
                We reserve the right to remove any content that violates these terms or is otherwise deemed inappropriate. This includes content flagged by users as harmful or abusive.
                <br /><br />
                <b>12. Third-Party Services</b>   <br />
                The platform may contain links to third-party websites or services. We are not responsible for the content, policies, or practices of any third-party websites or services. Your use of third-party services is at your own risk.
                <br /><br />
                <b>13. Limitation of Liability</b>   <br />
                To the fullest extent permitted by law, [Website Name] is not liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of profits, data, or goodwill, resulting from your use of the service.
                <br /><br />
                <b>14. Disclaimers</b>   <br />
                We do not guarantee the accuracy, completeness, or reliability of any content provided through the platform. The service is provided "as is" without warranties of any kind, either express or implied. We disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                <br /><br />
                <b>15. Termination of Use</b>   <br />
                We may, at our sole discretion, terminate or suspend your account or access to the service for any reason, including breach of these terms. Upon termination, your right to use the service will immediately cease.
                <br /><br />
                <b>16. Privacy Policy</b>   <br />
                Your privacy is important to us. Please review our [Privacy Policy], which governs how we collect, use, and disclose your personal information.
                <br /><br />
                <b>17. Governing Law</b>   <br />
                These Terms of Use are governed by and construed in accordance with the laws of [Country/State]. You agree to submit to the jurisdiction of the courts located in [Location] for any legal proceedings.
                <br /><br />
                <b>18. Dispute Resolution</b>   <br />
                In the event of any dispute arising out of or in connection with these terms, the parties agree to first attempt to resolve the dispute through informal negotiation. If the dispute is not resolved within 30 days, it shall be referred to mediation or arbitration.
                <br /><br />
                <b>19. Indemnification</b>   <br />
                You agree to indemnify, defend, and hold harmless [Website Name], its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, or expenses arising from your use of the service or violation of these terms.
                <br /><br />
                <b>20. No Waiver</b>   <br />
                The failure of [Website Name] to enforce any right or provision of these terms shall not constitute a waiver of such right or provision.
                <br /><br />
                <b>21. Severability</b>   <br />
                If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable.
                <br /><br />
                <b>22. Contact Information</b>   <br />
                If you have any questions or concerns regarding these Terms of Use, please contact us at
                </p>
              </div>
            )}
            {activeTab === "tab_item_5" && (
              <div>
                <h3 className="text-indigo-600">Governing law</h3>
                <p>
                Welcome to Plugins, an audio streaming platform that allows users to enjoy a vast range of music and audio content. By accessing or using our service, you agree to comply with the following Terms of Use. Please read these terms carefully before using our website and services.
                  <br /><br />
                <b>1. Acceptance of Terms </b>   <br /> 
                By accessing or using the services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree, you must not access the service.
                   <br /><br />
                <b>2. Changes to the Terms</b>   <br />
                We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting. It is your responsibility to review the terms regularly. Continued use of the website after modifications constitutes your acceptance of the revised terms.
                <br /><br />
                <b>3. Eligibility</b>   <br />
                You must be at least 13 years old to use the website. If you are between 13 and 18, you may use the website only with the involvement of a parent or guardian who agrees to these terms.
                <br /><br />
                <b>4. User Account</b>   <br />
                To access certain features of the service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                <br /><br />
                <b>5. User Conduct</b>   <br />
                You agree to use the service for lawful purposes only. You are prohibited from:
                Uploading, posting, or transmitting any content that is unlawful, harmful, abusive, harassing, defamatory, or otherwise objectionable.
                Using the service to distribute viruses or other harmful computer code.
                Attempting to interfere with or disrupt the service or its servers.
                Engaging in any activity that may damage, disable, or impair the website’s functionality or security.

                <br /><br />

                <b>6. Intellectual Property Rights</b>   <br />
                All content available on the platform, including music, images, text, and software, is owned by [Website Name] or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content unless expressly permitted by us or the applicable rights holders.
                <br /><br />
                <b>7. License to Use</b>   <br />
                We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the service for personal, non-commercial use. This license does not grant you the right to use the platform for any other purpose, including commercial exploitation of the content.
                <br /><br />
                <b>8. Subscription and Payment</b>   <br />
                Certain features of the service may require a subscription. By subscribing, you agree to pay all applicable fees associated with your subscription plan. Subscription fees are non-refundable, except as required by law.
                <br /><br />
                <b>9. Cancellation of Subscription</b>   <br />
                You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of the current billing period, and you will retain access to the service until that time.
                <br /><br />
                <b>10. Content Licensing and Ownership</b>   <br />
                Users may upload or stream audio content to the platform. By submitting content, you grant [Website Name] a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content within the platform.
                <br /><br />
                <b>11. Content Removal</b>   <br />
                We reserve the right to remove any content that violates these terms or is otherwise deemed inappropriate. This includes content flagged by users as harmful or abusive.
                <br /><br />
                <b>12. Third-Party Services</b>   <br />
                The platform may contain links to third-party websites or services. We are not responsible for the content, policies, or practices of any third-party websites or services. Your use of third-party services is at your own risk.
                <br /><br />
                <b>13. Limitation of Liability</b>   <br />
                To the fullest extent permitted by law, [Website Name] is not liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of profits, data, or goodwill, resulting from your use of the service.
                <br /><br />
                <b>14. Disclaimers</b>   <br />
                We do not guarantee the accuracy, completeness, or reliability of any content provided through the platform. The service is provided "as is" without warranties of any kind, either express or implied. We disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                <br /><br />
                <b>15. Termination of Use</b>   <br />
                We may, at our sole discretion, terminate or suspend your account or access to the service for any reason, including breach of these terms. Upon termination, your right to use the service will immediately cease.
                <br /><br />
                <b>16. Privacy Policy</b>   <br />
                Your privacy is important to us. Please review our [Privacy Policy], which governs how we collect, use, and disclose your personal information.
                <br /><br />
                <b>17. Governing Law</b>   <br />
                These Terms of Use are governed by and construed in accordance with the laws of [Country/State]. You agree to submit to the jurisdiction of the courts located in [Location] for any legal proceedings.
                <br /><br />
                <b>18. Dispute Resolution</b>   <br />
                In the event of any dispute arising out of or in connection with these terms, the parties agree to first attempt to resolve the dispute through informal negotiation. If the dispute is not resolved within 30 days, it shall be referred to mediation or arbitration.
                <br /><br />
                <b>19. Indemnification</b>   <br />
                You agree to indemnify, defend, and hold harmless [Website Name], its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, or expenses arising from your use of the service or violation of these terms.
                <br /><br />
                <b>20. No Waiver</b>   <br />
                The failure of [Website Name] to enforce any right or provision of these terms shall not constitute a waiver of such right or provision.
                <br /><br />
                <b>21. Severability</b>   <br />
                If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable.
                <br /><br />
                <b>22. Contact Information</b>   <br />
                If you have any questions or concerns regarding these Terms of Use, please contact us at
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
