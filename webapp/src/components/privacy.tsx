// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import {Modal} from 'react-bootstrap';

type Props = {
};

type State = {
    show: boolean;
};

export default class HelpPrivacy extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            show: true,
        };
    }

    doHide = () => {
        this.setState({show: false});
    }

    render() {
        return (
            <Modal
                dialogClassName='a11y__modal privacy-modal'
                show={this.state.show}
                role='dialog'
                aria-labelledby='privacyModalLabel'
                onHide={this.doHide}
            >
                <Modal.Header closeButton={true}>
                    <Modal.Title
                        componentClass='h1'
                        id='privacyModalLabel'
                    >
                        {'Privacy Policy '}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='privacy-modal__content'>
                        <div>
                            <section
                                id='your-privacy'
                                className='block-legal-text'
                            >
                                <h2 className='title dark'>{'Effective Date: April 21st, 2021 '}</h2>
                                <p>{'At Kix Chat (“kix.co.il” or “we” or “us” or “our”), protecting your privacy is really important to us. This platform privacy policy (the “Privacy Policy”) is designed to help you understand what information we collect about you, including personal data within the meaning of the General Data Protection Regulation (“GDPR”) and other information that directly identifies you or makes you identifiable (“personal information”), and how we use that information. '}</p>
                                <p>{'This Privacy Policy applies to all visitors and users of kix.co.il using Mattermost’s self-hosted and cloud services (collectively, the “Services”), and other kix.co.il and nix.co.il hosted sites and applications (collectively, the “Sites”). '}</p>
                                <p>{'Please read this Privacy Policy carefully. By accessing or using any part of the Services or the Sites, you acknowledge that you have been informed of our practices with regard to your personal information and other data. If you do not agree to this Privacy Policy, please immediately cease use of the Services and the Sites and please shut down your account. '}</p>
                                <p>{'In order to provide the Services to you, our platform is utilized by and in some cases has entered into a separate data processing agreement with the organization (either an employer or another entity or person)(each, a “Customer”) that governs the delivery, access, and your use of the Services. The Customer owns and controls the messages, files, or other content submitted to the Services, including your personal information (the “Customer Data”) and your account with the Services and any associated Customer Data that you provide. In these cases our platform acts as a data processor within the meaning of Art. 28 GDPR and the processing of such data is governed by the respective data processing agreement with the Customer. The Customer also controls and manages any Third Party Services they use in conjunction with the Services. The Customer has authorized you to access the Services that they control and the Customer is the controller of the Customer Data. Please contact the Customer if you have any questions related to such Customer’s specific settings and privacy practices. '}</p>
                            </section>

                            <section
                                id='contact-us'
                                className='block-legal-text'
                            >
                                <h2 className='title dark'>{'Contact Us '}</h2>
                                <p>{'Please contact us at '}
                                    <a href='mailto:support@kix.co.il'>{'support@kix.co.il '}</a>
                                    {'if you have any complaints or concerns with respect to your privacy. If you believe we are unable to assist you, you have the right to lodge a complaint with a supervisory authority in the relevant jurisdiction. However, we are committed to working with you to resolve any complaint or concern you may have with respect to your privacy. '}
                                </p>
                            </section>

                            <section
                                id='collection-and-usage'
                                className='block-legal-text'
                            >
                                <h2 className='title dark'>{'Information We Collect and How We Use It '}</h2>
                                <p>{'We collect information that relates to you in connection with your visits to the Sites and use of the Services (including without limitation, personal information that you provide, and information that is collected automatically). Please be aware that some of the information described below is required to offer you the Sites and Services, and if this information is not provided, we may not be able to provide the Sites and Services. '}</p>
                                <p>
                                    <strong>
                                        <u>{'Information from Website Visitors: '}</u></strong></p>
                                <ul>
                                    <li>
                                        <strong>{'Information you provide to us: '}</strong>
                                        {'We collect personal information that you provide when you register for or create an account with the Sites or request more information about our Services. This information includes your name, email address, phone number, and other necessary contact details. We use this information <strong>to communicate with you about the Services and respond to your requests.</strong> We use your contact information to respond to your questions, inform you about changes to the Services and any events, communicate about account-related matters, and resolve technical issues you encounter. We may also use your information in assisting us with responding to your questions and give you access to demo and educational materials. We may occasionally send you an email to tell you about security, system information, new features, solicit feedback, or keep you informed with what is going on with kix.co.il and nix.co.il communities. Please note that there’s an unsubscribe link located at the bottom of each of the marketing emails we send you, so you can stop receiving such emails at any time. '}
                                        <ul>
                                            <li>{'To the extent that such processing is subject to the GDPR, the following applies: In case you act as our customer, the legal basis for the above-mentioned processing of personal information is Art. 6 (1) (b) GDPR (performance of a contract). '}</li>
                                            <li>{'To the extent that such processing is subject to the GDPR, the following applies: In case you act for your employer or another organization as a customer, the legal basis for the above-mentioned processing of personal information is Art. 6 (1) (f) GDPR (legitimate interests). '}</li>
                                        </ul>
                                    </li>
                                    <li>{'When you use or visit the Sites and/or Services, we may send one or more cookies — small text files containing a string of alphanumeric characters — to your computer or device that allows us to uniquely identify your browser, computer, or device. '}
                                        <strong>{'Please see our '}</strong>
                                        <a href='http://127.0.0.1:8065/plug/il.co.kix.nix-plugin/cookies'>
                                            <strong>{'Cookies Policy '}</strong>
                                        </a>
                                        <strong>{'for more information on the way we use Cookies '}</strong>
                                        {'and the information we collect from Cookies. '}
                                    </li>
                                    <li>
                                        <strong>{'Device And Log Information: '}</strong>
                                        {'We may record log file information every time you access and use the Sites including Internet Protocol (IP) address, location, browser type and settings, date and time the Sites were used, the web page that you were visiting before accessing our Sites, external links and the features or content which you accessed from our site. When you access the Sites with a device (including a mobile device), we may collect and store a unique identifier associated with your device and additional information about the device accessing the Site, including user settings, location, operating system of the device, and crash settings. We use this information '}
                                        <strong>{'to protect from potential security attacks and abuse. '}</strong>
                                        {'We use this type of information to verify accounts and activity, to detect, investigate, prevent, and respond to potential or actual security incidents and to monitor and protect against other malicious, deceptive, fraudulent, or illegal activity. '}
                                        <ul>
                                            <li>{'To the extent that such processing is subject to the GDPR, the following applies: The legal basis for such processing of personal information is Art. 6 (1) (f) GDPR (legitimate interests). '}</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>{'Usage Information: '}</strong>
                                        {'We also collect information about the way you use our Sites, for example, the site from which you came and the site to which you are going when you leave, the pages you visit, the links you click, how frequently you access the Sites, whether you open emails or click the links contained in emails, whether you access the Site from multiple devices and other actions you take on the Sites. We may collect analytics data, or use third-party analytics tools, to help us measure traffic, usage trends, and to understand more about the demographics of our users. We may also work with third party partners to employ technologies, including the application of statistical modeling tools, which attempt to recognize you across multiple devices. We use this information '}
                                        <strong>{'to market, promote, and drive engagement with our Sites. '}</strong>
                                        {'We use usage data to improve performance and content. We use contact information and information about how you interact with our Sites to market to you or offer you information and updates on our products or services we think that you may be interested in. While we may use your personal information in this manner, please note that we do not use the personal information you input to the Sites to serve you ads, and we will never share such information with any third parties for marketing or advertising purposes, unless you have explicitly submitted it to us for that purpose. '}
                                        <ul>
                                            <li>{'To the extent that such processing is subject to the GDPR, the following applies: The legal basis for such processing of personal information is Art. 6 (1) (f) GDPR (legitimate interests). '}</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>
                                    <strong>
                                        <u>{'Information sent to Mattermost from Self-Hosted Products: '}</u>
                                    </strong>
                                </p>
                                <ul>
                                    <li>
                                        <strong>{'Service and Usage Information: '}</strong>
                                        {'Mattermost collects error and diagnostics, security alert and log file reporting. We may also collect information about usage of enterprise features as well as commercial license key registration information. We use this information to improve your experience with Services and to protect from potential security attacks and abuse. Please see '}
                                        <a href='https://docs.mattermost.com/manage/telemetry.html'>{'telemetry data '}</a>
                                        {'for more information. You can also opt-out of the usage ping through the admin dashboard. '}
                                        <ul>
                                            <li>{'To the extent that such processing is subject to the GDPR, the following applies: The legal basis for such processing of personal information is Art. 6 (1) (f) GDPR (legitimate interests). '}</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>{'Information You Provide to Mattermost: '}</strong>
                                        {'Customers that purchase the Services may provide billing details such as payment information which include organization’s name, phone number, domain, email address, physical address, and billing addresses. We also collect information that you provide when you request more details about our Services. This information may include your name, email address, and other necessary account details. We use this information to provide and deliver Services, process billing transactions related to the Services, to communicate with you about the Services and respond to your requests. '}
                                        <ul>
                                            <li>{'To the extent that such processing is subject to the GDPR, the following applies: In case you act as our customer, the legal basis for the above-mentioned processing of personal information is Art. 6 (1) (b) GDPR (performance of a contract). '}</li>
                                            <li>{'In case you act for your employer or another organization as a customer, the legal basis for the above-mentioned processing of personal information is Art. 6 (1) (f) GDPR (legitimate interests). '}</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>
                                            {'Push Notification Information: '}
                                        </strong>
                                        {'Customers may choose a specific '}
                                        {'configuration of the system that uses the optional Mattermost Hosted Push Notification '}
                                        {'Service(HPNS), in lieu of the self-hosted option also offered. When utilizing this service, '}
                                        {'customers may choose to enable information that include the following types of Personal '}
                                        {'Data: usernames and message preview snippets (which may include Personal Data shared by '}
                                        {'users in messages, if the customer enables the ability to display message preview snippets '}
                                        {'for the HPNS relay). Customers can configure HPNS to share no personal data in relaying '}
                                        {'messages to mobile applications. '}
                                        <ul>
                                            <li>
                                                {'To the extent that such processing is subject to the GDPR, the following applies: In '}
                                                {'case you act as our customer, the legal basis for the above-mentioned processing of '}
                                                {'personal information is Art. 6 (1) (b) GDPR (performance of a contract). '}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>
                                    <strong>
                                        <u>
                                            {'Information from Members and Contributors: '}
                                        </u>
                                    </strong>
                                </p>
                                <ul>
                                    <li>
                                        <strong>
                                            {'Information You Provide to Us: '}
                                        </strong>
                                        {'We collect personal information that you '}
                                        {'provide when you register for or create an account with the Sites or Services or request '}
                                        {'more information about our Sites or Services, or contribute to our open source projects. '}
                                        {'This information includes your name, email address, physical address, and phone number. We '}
                                        {'use this information '}
                                        <strong>
                                            {'to communicate with you and respond to your requests. '}
                                        </strong>
                                        {'We use your contact information to respond to your questions, inform you about changes to '}
                                        {'the Services and community events, communicate about your contributions, solicit feedback, '}
                                        {'and resolve technical issues you encounter. We may also use your information in assisting us '}
                                        {'in responding to your questions. If you have made a contribution to our open source projects '}
                                        {'we may use your physical address to send you thank you gifts. '}
                                        <ul>
                                            <li>
                                                {'In case you act for your employer or another organization as a customer, the legal '}
                                                {'basis for the above-mentioned processing of personal information is Art. 6 (1) (f) '}
                                                {'GDPR(legitimate interests). '}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>
                                    {'For further information regarding the legal basis for the respective processing, please refer to '}
                                    {'the section “Our Legal Basis for Processing in the EU and Your Rights” below. '}
                                </p>
                                <p>
                                    {'If personal information is aggregated or de-identified so it is no longer reasonably associated '}
                                    {'with an identified or identifiable natural person, we may use it for any business purpose. '}
                                </p>
                            </section>

                            <section
                                id='third-party-sharing'
                                className='block-legal-text'
                            >
                                <h2 className='title dark'>
                                    {'Information Shared with Third Parties and For What Purposes '}
                                </h2>
                                <p>
                                    {'We do '}
                                    {'not sell, trade, or otherwise transfer the information we collect from you to unaffiliated third '}
                                    {'parties.We do, however, share the information we collect from you with trusted third parties who '}
                                    {'assist us in operating our Sites and Services, conducting our business, or servicing you, provided '}
                                    {'that those parties agree to keep your information confidential and secure. These trusted third '}
                                    {'parties include: '}
                                </p>
                                <ul>
                                    <li>
                                        {'Service providers, subcontractors, partners, vendors, consultants, and others that help us '}
                                        {'with any of the purposes in this Privacy Policy, including by performing services on our '}
                                        {'behalf such as identifying and serving targeted advertisements, processing payments, sending '}
                                        {'email, providing back-office services, or measuring site traffic. These service providers '}
                                        {'are not permitted to use the information collected on our behalf except to help us conduct '}
                                        {'and improve our business. Notwithstanding the foregoing, non-personally identifiable visitor '}
                                        {'information from our Sites may be provided to other parties for marketing, advertising, or '}
                                        {'other uses. '}
                                    </li>
                                    <li>
                                        {'Our affiliates, parent companies, subsidiaries, and other related companies, all for the '}
                                        {'purposes in this Privacy Policy; '}
                                    </li>
                                    <li>
                                        {'Third parties to respond or comply with, in our sole discretion, a court order, subpoena, '}
                                        {'law enforcement, or other government request (with or without notice to you, in our '}
                                        {'discretion) under applicable law; '}
                                    </li>
                                    <li>
                                        {'Buyers, successors, or others in connection with a merger, divestiture, restructuring, '}
                                        {'reorganization, dissolution, or other sale or transfer of some or all of our business or '}
                                        {'assets.We will provide notice before your personal information is transferred and becomes '}
                                        {'subject to a different privacy policy; '}
                                    </li>
                                    <li>
                                        {'Third parties, in our discretion, to: (i) satisfy any applicable law or regulation, (ii) '}
                                        {'enforce this Privacy Policy, including the investigation of potential violations thereof, '}
                                        {'(iii) investigate and defend ourselves against any third party claims or allegations, or '}
                                        {'(iv) protect against harm to the rights, property or safety of us, the Sites, the Services, '}
                                        {'other users of the Services, or third parties (including financial loss, or in connection '}
                                        {'with preventing fraud or illegal activity, and/or to enforce our other agreements with you); '}
                                        {'and '}
                                    </li>
                                    <li>
                                        {'Other third parties with your consent. '}
                                    </li>
                                </ul>
                            </section>

                            <section
                                id='information-protection'
                                className='block-legal-text'
                            >
                                <h2 className='title dark'>
                                    {'How We Protect Your Personal Information '}
                                </h2>
                                <p>
                                    {'We implement a variety of '}
                                    {'security measures to maintain the safety of your personal information that you submit from loss, '}
                                    {'misuse, and unauthorized access or disclosure. These steps take into account the sensitivity of the '}
                                    {'information we collect, process, and store, as well as the current state of technology. Any '}
                                    {'information that we consider potentially sensitive is transmitted through encrypted channels and we '}
                                    {'follow generally accepted industry standards to protect the data collected by us, both during '}
                                    {'transmission and after we receive it. Given the nature of communications and information processing '}
                                    {'technology, we cannot guarantee that information during transmission through the Internet or while '}
                                    {'stored on our systems or otherwise in our care will be absolutely safe from intrusion by others. '}
                                </p>
                                <p>
                                    {'If you believe that any account credentials for the Services have been compromised, please '}
                                    {'contact us immediately at '}
                                    <a href='mailto:support@kix.co.il'>
                                        {'support@kix.co.il '}
                                    </a>
                                    {'. '}
                                </p>
                            </section>

                            <section
                                id='cookies'
                                className='block-legal-text'
                            >
                                <h2 className='title dark'>
                                    {'Cookies, Tracking Technologies, and Do Not Track Signals '}
                                </h2>
                                <p>
                                    {'We use '}
                                    {'cookies and other tracking mechanisms on our Sites and Services. Please read our '}
                                    <a
                                        href='http://127.0.0.1:8065/plug/il.co.kix.nix-plugin/cookies'
                                    >
                                        {'Cookies Policy '}
                                    </a>
                                    {'for more details. '}
                                </p>
                                <p>
                                    {'Your browser settings may allow you to automatically transmit a Do Not Track signal to websites '}
                                    {'and other online services you visit. We do not alter our practices when we receive a Do Not '}
                                    {'Track signal from a visitor’s browser because we do not track our visitors to provide targeted '}
                                    {'advertising.To find out more about Do Not Track, please visit '}
                                    <a
                                        href='https://allaboutdnt.com/'
                                    >
                                        {'All About Do Not Track '}
                                    </a>
                                    {'. '}
                                </p>
                            </section>

                            <section
                                id='gdpr'
                                className='block-legal-text'
                            >
                                <h2 className='title dark'>
                                    {'Our Legal Basis for Processing in the EU and Your Rights '}
                                </h2>
                                <p>
                                    {'If the '}
                                    {'GDPR is applicable as per Art. 3 of the GDPR. then references to “personal information” in this '}
                                    {'Privacy Policy are equivalent to “personal data” governed by the GDPR. '}
                                </p>
                                <p>
                                    {'Our legal basis for collecting and using the personal information described above will depend on '}
                                    {'the personal information concerned and the specific context in which we collect it. We will '}
                                    {'normally collect personal information from you only where we need the personal information to '}
                                    {'perform a contract with you (e.g. to provide you with our Services), where the processing is in '}
                                    {'our legitimate interests and not overridden by your data protection interests or fundamental '}
                                    {'rights and freedoms, or where we have your consent. In some cases, we may also have a legal '}
                                    {'obligation to collect personal information from you. '}
                                </p>
                                <ul>
                                    <li>
                                        <strong>
                                            {'Performance of a contract. '}
                                        </strong>
                                        {'The use of your personal data '}
                                        {'may be necessary to perform a Customer Agreement or other contract that you have with us. '}
                                        {'For example, if you contribute to a project, create a profile, post, and comment on our '}
                                        {'Sites, we will use your information to carry out our obligation to complete and administer '}
                                        {'that Customer Agreement or contract. '}
                                    </li>
                                    <li>
                                        <strong>{'Legitimate interests. '}</strong>
                                        {'We use your personal data for our legitimate '}
                                        {'interests, such as to provide you with the best content through our Sites, Services, and '}
                                        {'communications with users and the public, to improve and promote our products and services, '}
                                        {'and for administrative, security, fraud prevention and legal purposes. For further details '}
                                        {'on the information collected by us, please see the sections above. '}
                                    </li>
                                    <li>
                                        <strong>{'Consent. '}</strong>
                                        {'We may rely on your consent to use your personal data for certain '}
                                        {'direct marketing purposes, such as sending you newsletter updates about our products '}
                                        {'and services. You may withdraw your consent at any time through the unsubscribe feature '}
                                        {'provided with each marketing email or by contacting us at the addresses given at the end of '}
                                        {'this Privacy Policy. '}
                                    </li>
                                </ul>
                            </section>

                            <section
                                id='international-data-transfers'
                                className='block-legal-text'
                            >
                                <h2 className='title dark'>
                                    {'International Data Transfers and Storage '}
                                </h2>
                                <p>
                                    {'In order for us to '}
                                    {'operate and provide our Sites and Services globally, the personal data you provide to us or that we '}
                                    {'collect may be transferred or accessed in various countries, including the United States of America. '}
                                    {'If you are located in the European Economic Area or other regions with laws governing data '}
                                    {'collection and use that may differ from U.S. law, please note that we may transfer information, '}
                                    {'including personal information, to a country and jurisdiction that offers a level of protection that '}
                                    {'may, in certain instances, be less protective of your personal data than the jurisdiction you '}
                                    {'typically reside in. '}
                                </p>
                                <ul>
                                    <li>
                                        <strong>
                                            {'European Union Standard Contractual Clauses: '}
                                        </strong>
                                        {'Where this is the case, we '}
                                        {'will enter into guarantees to ensure that the right security measures are taken so that your '}
                                        {'privacy rights continue to be protected as outlined in this Privacy Policy. If we transfer '}
                                        {'information from the European Economic Area to third parties outside the European Economic '}
                                        {'Area and to countries not subject to schemes which are considered as providing an adequate '}
                                        {'data protection standard, we will enter into contracts which are based on the '}
                                        <a
                                            href='https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en'
                                        >
                                            {'EU Standard Contractual Clauses '}
                                        </a>
                                        {'with these parties, unless any such transfer is '}
                                        {'permitted for other reasons under the GDPR. '}
                                    </li>
                                    <li>
                                        <strong>
                                            {'Data Transfer under Art. 49 GDPR: '}
                                        </strong>
                                        {'Notwithstanding the above, we may also '}
                                        {'rely on Art. 49 GDPR to legitimize the transfer. '}
                                    </li>
                                    <li>
                                        <strong>
                                            {'U. - U.S.Privacy Shield and Swiss-U.S. Privacy Shield: '}
                                        </strong>
                                        {'While we '}
                                        {'remain self-certified under the E.U.-U.S. Privacy Shield and Swiss – U.S. Privacy Shield, '}
                                        {'we are not relying on these frameworks for the transfer of personal data. To see more '}
                                        {'information about our responsibilities under Privacy Shield, please see '}
                                        <a
                                            href='https://mattermost.com/privacy-shield/'
                                        >
                                            {'https://mattermost.com/privacy-shield      '}
                                        </a>
                                        {'. '}
                                        {'To learn more about the Privacy Shield Program, please see '}
                                        <a
                                            href='https://www.privacyshield.gov/welcome'
                                        >
                                            {'http://www.privacyshield.gov/welcome '}
                                        </a>
                                        {'. '}
                                    </li>
                                </ul>
                            </section>

                            <section
                                id='retention'
                                className='block-legal-text'
                            >
                                <h2 className='title dark'>
                                    {'Retention of Your Personal Information '}
                                </h2>
                                <p>
                                    {'We retain your personal '}
                                    {'information for as long as we need to provide our Sites and/or Services to you and the Customer(s). '}
                                    {'After such time, we will either delete or anonymize your information. '}
                                </p>
                                <p>
                                    {'If you have an account on our sites or services, we will retain your information for as '}
                                    {'long as your account is active or as needed to perform our contractual obligations, provide you '}
                                    {'services through the Sites, to comply with legal obligations, resolve disputes, preserve legal '}
                                    {'rights, or enforce our Customer Agreements and agreements. We will delete information once it is '}
                                    {'no longer necessary to fulfill the purposes for which it was collected and processed. '}
                                </p>
                                <p>
                                    <strong>
                                        {'Information from Website Visitors: '}
                                    </strong>
                                </p>
                                <ul>
                                    <li>
                                        {'If you have elected to receive marketing emails from us, we retain information about your '}
                                        {'marketing preferences for a reasonable period of time from the date you last expressed '}
                                        {'interest in our Services, such as when you last opened an email from us or ceased using your '}
                                        {'kix.co.il account. We retain information derived from cookies and other tracking '}
                                        {'technologies for a reasonable period of time from the date such information was created so '}
                                        {'long as needed for our business purposes. '}
                                    </li>
                                </ul>
                                <p>
                                    <strong>
                                        {'Information from Mattermost Self-Hosted and Cloud Products: '}
                                    </strong>
                                </p>
                                <ul>
                                    <li>
                                        {'Depending on the Services plan, Customers may be able to customize their retention settings '}
                                        {'such that they are different than Mattermost’s standard data retention practices. Customers '}
                                        {'may also apply different settings to messages, files, or other types of Customer Data. The '}
                                        {'deletion of Customer Data and other use of the Services by Customer may result in the '}
                                        {'deletion and/or de-identification of certain personal information and other information. '}
                                    </li>
                                    <li>
                                        {'Mattermost Cloud products will retain Customer Data in accordance with a Customer’s '}
                                        {'instructions, including any applicable terms in the Customer Agreement and Customer’s use of '}
                                        {'Services, and as required by applicable law. Mattermost may provide the option for Customers '}
                                        {'to delete Customer Data after their subscription ends. This request must be made by the '}
                                        {'customer, and Mattermost may require additional ID verification. Mattermost will delete all '}
                                        {'information from currently-running production systems within one year of the deletion '}
                                        {'request. '}
                                    </li>
                                    <li>
                                        {'National commercial or financial codes may require us to retain certain Customer information '}
                                        {'for up to 10 years. '}
                                    </li>
                                </ul>
                                <p>
                                    <strong>
                                        {'Information from Community Members and Contributors: '}
                                    </strong>
                                </p>
                                <ul>
                                    <li>
                                        {'Due to the open source nature of our products, services, and community, we may retain '}
                                        {'limited personal information indefinitely in order to ensure transactional integrity and '}
                                        {'nonrepudiation.For example, if you provide your information in connection with a forum or '}
                                        {'blog post or comment, we may display that information even if you have deleted your account '}
                                        {'as we do not automatically delete community posts. Also, if you contribute to a Mattermost '}
                                        {'project and provide your personal information in connection with that contribution, that '}
                                        {'information(including your name) will be embedded and publicly displayed with your '}
                                        {'contribution and we will not be able to delete or erase it because doing so would break the '}
                                        {'project code. '}
                                    </li>
                                </ul>
                                <p>
                                    {'If we are involved in litigation or a governmental or regulatory investigation, then we keep '}
                                    {'personal information throughout the period of litigation or investigation and for a reasonable '}
                                    {'amount of time thereafter. If a settlement means that we have to keep personal information for '}
                                    {'longer, then we keep personal information for the period required to administer the settlement. '}
                                    {'If we provide personal information to law enforcement agencies, then we keep a record of this '}
                                    {'for one year beyond the end of the investigation. '}
                                </p>
                            </section>

                            <section
                                id='european-union-privacy-rights'
                                className='block-legal-text'
                            >
                                <h2 className='title dark'>
                                    {'Your European Union Privacy Rights Regarding Your Personal '}
                                    {'Information '}
                                </h2>
                                <p>
                                    {'If the provision of the GDPR is applicable, then you have certain rights with '}
                                    {'respect to the use of personal information on the Sites and Services. If your Personal Information '}
                                    {'was submitted to us by a Customer or your account is controlled by a Customer, then please contact '}
                                    {'the applicable Customer directly to exercise the below rights. Otherwise, please contact us at '}
                                    <a
                                        href='mailto:support@kix.co.il'
                                    >
                                        {'support@kix.co.il '}
                                    </a>
                                    {'to exercise any of the below '}
                                    {'rights. '}
                                </p>
                                <p>
                                    {'You have the right: '}
                                </p>
                                <ul>
                                    <li>
                                        {'to demand information in accordance with Article 15 GDPR regarding the processing '}
                                        {'of your personal data by us. In particular, you may request information on the purposes of '}
                                        {'the processing, the categories of personal data, the categories of recipient to whom your '}
                                        {'data have been or are disclosed, the envisaged storage period, the existence of the right to '}
                                        {'rectification, erasure, restriction of processing or objection, the right to lodge a '}
                                        {'complaint, the source of your data to the extent that these were not collected at our site, '}
                                        {'and the existence of automated decision-making, including profiling and any meaningful '}
                                        {'information on its details; '}
                                    </li>
                                    <li>
                                        {'in accordance with Article 16 GDPR, obtain the rectification of any inaccurate '}
                                        {'personal data stored by us or completion of such data without undue delay; '}
                                    </li>
                                    <li>
                                        {'in accordance with Article 17 GDPR, obtain the erasure of your personal data '}
                                        {'stored by us, to the extent that processing is not required for exercising the right of '}
                                        {'freedom of expression and information, for compliance with a legal obligation, for reasons '}
                                        {'of public interest or for the establishment, exercise or defense of legal claims; '}
                                    </li>
                                    <li>
                                        {'in accordance with Article 18 GDPR, obtain the restriction of processing of your '}
                                        {'personal data, to the extent that the accuracy of the data is contested by you, processing '}
                                        {'is unlawful, but you oppose erasure and we no longer need the personal data, but you still '}
                                        {'require them for the establishment, exercise or defense of legal claims or you have objected '}
                                        {'to processing pursuant to Article 21 GDPR; '}
                                    </li>
                                    <li>
                                        {'in accordance with Article 20 GDPR, demand to receive your personal data that you '}
                                        {'have provided to us in a structured, commonly used and machine-readable format or to demand '}
                                        {'transmission to another controller; '}
                                    </li>
                                    <li>
                                        {'in accordance with Article 7(3) GDPR, to withdraw your consent once given to us at any '}
                                        {'time.This has the consequence that we may no longer continue the data processing activities '}
                                        {'that were based on this consent in the future. '}
                                    </li>
                                </ul>
                                <p>
                                    {'In addition to the above-listed rights, as an EU resident, you also have the right to lodge a '}
                                    {'complaint with your local data protection authority. Further information about how to contact '}
                                    {'your local data protection authority is available at '}
                                    <a
                                        href='https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm'
                                    >
                                        {'https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm '}
                                    </a>
                                    {'. '}
                                </p>
                                <p>
                                    {'In accordance with Article 13(2)(e) GDPR we would like to inform you about the following: '}
                                </p>
                                <p>
                                    {'The provision of personal data is neither a statutory nor contractual requirement nor a '}
                                    {'requirement necessary to enter into a contract. You are not obliged to provide personal data. '}
                                    {'There are no consequences resulting from failure to provide such data. '}
                                </p>
                                <p>
                                    {'In accordance with Article 13(2)(f) GDPR we would like to inform you about the following: '}
                                </p>
                                <p>
                                    {'We do not process your personal data for the purpose of automated decision-making. '}
                                </p>
                            </section>

                            <section
                                id='california-privacy-rights'
                                className='block-legal-text'
                            >
                                <h2 className='title dark'>
                                    {'Your California Privacy Rights '}
                                </h2>
                                <p>
                                    {'This section provides additional '}
                                    {'details about the personal information we collect about California consumers and the rights afforded '}
                                    {'to them under the California Consumer Privacy Act or “CCPA.” '}
                                </p>
                                <p>
                                    {'For more details about the personal information we have collected over the last 12 months, '}
                                    {'including the categories of sources, please see the “Information We Collect and '}
                                    {'Receive” section above. We collect this information for the business and commercial '}
                                    {'purposes described in the “How We Use Your Information” section above. We share this information '}
                                    {'with the categories of third parties described in the “Information We Share with Third-Parties '}
                                    {'and For What Purposes” section above. We do not sell (as such term is defined in the '}
                                    {'CCPA) the personal information we collect (and will not sell it without providing a right to '}
                                    {'opt - out). Please note that we do use third-party cookies for our advertising purposes as further '}
                                    {'described in our '}
                                    <a href='http://127.0.0.1:8065/plug/il.co.kix.nix-plugin/cookies'>{'Cookies Policy '}</a>{'. '}
                                </p>
                                <p>
                                    {'Subject to certain limitations, the CCPA provides California consumers the right to request to '}
                                    {'know more details about the categories or specific pieces of personal information we collect '}
                                    {'(including how we use and disclose this information), to delete their personal information, to '}
                                    {'opt - out of any “sales” that may be occurring, and to not be discriminated against for exercising '}
                                    {'these rights. '}
                                </p>
                                <p>
                                    {'California consumers may make a request pursuant to their rights under the CCPA by contacting us '}
                                    {'at support@kix.co.il . We will verify your request using the information associated with '}
                                    {'your account, including email address. Government identification may be required. Consumers can '}
                                    {'also designate an authorized agent to exercise these rights on their behalf. '}
                                </p>
                            </section>

                            <section
                                id='third-party-links-and-websites'
                                className='block-legal-text'
                            >
                                <h2 className='title dark'>
                                    {'Third - Party Links and Websites '}
                                </h2>
                                <p>
                                    {'This Privacy Policy does not apply '}
                                    {'to any third-party websites, services, or applications, even if they are accessible through our '}
                                    {'Sites and/or Services.  This Privacy Policy only applies to our Sites and Services, so when you '}
                                    {'link to other websites you should read those separate and independent privacy policies. We have no '}
                                    {'responsibility or liability for the content and activities of these linked sites. However, we seek '}
                                    {'to protect the integrity of our Sites and Services and welcome any feedback about the Sites and '}
                                    {'Services. '}
                                </p>
                            </section>

                            <section
                                id='information-from-children'
                                className='block-legal-text'
                            >
                                <h2 className='title dark'>{'Information from Children '}
                                </h2>
                                <p>
                                    {'The Services are not directed to '}
                                    {'children under the age of 13, and we do not knowingly collect personal information from children '}
                                    {'under the age of 13. If you are a parent or guardian of a child under the age of 13 and believe that '}
                                    {'your child may have provided us with personal information, please contact us '}
                                    {'at support@kix.co.il and we will use commercially reasonable efforts to delete that '}
                                    {'information. '}
                                </p>
                            </section>

                            <section
                                id='changes'
                                className='block-legal-text'
                            >
                                <h2 className='title dark'>
                                    {'Changes to our Privacy Policy '}
                                </h2>
                                <p>
                                    {'If we decide to change our Privacy '}
                                    {'Policy, we will post those changes on this page. Your continued use of the Sites and Services after '}
                                    {'an updated Privacy Policy is posted constitutes your consent to the revised Privacy Policy. '}
                                </p>
                            </section>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}
