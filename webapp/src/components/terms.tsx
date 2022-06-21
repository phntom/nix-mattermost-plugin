// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import {Modal} from 'react-bootstrap';

type Props = {
};

type State = {
    show: boolean;
};

export default class HelpTerms extends React.PureComponent<Props, State> {
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
                dialogClassName='a11y__modal terms-modal'
                show={this.state.show}
                role='dialog'
                aria-labelledby='termsModalLabel'
                onHide={this.doHide}
            >
                <Modal.Header closeButton={true}>
                    <Modal.Title
                        componentClass='h1'
                        id='termsModalLabel'
                    >
                        {'Terms of Service '}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='terms-modal__content'>
                        <div>
                            <h4 id='h-effective-as-of-october-8-2021'>
                                {'Effective as of October 8, 2021 '}
                            </h4>

                            <p>
                                {'IMPORTANT – READ CAREFULLY. THIS kix.co.il TERMS OF USE AGREEMENT (“AGREEMENT”) SETS FORTH THE LEGAL '}
                                {'TERMS AND CONDITIONS WHICH GOVERN YOUR USE OF THE kix.co.il.COM WEBSITE AND ALL OTHER WEBSITES OWNED '}
                                {'AND OPERATED BY kix.co.il, INC. (THE “WEBSITE”). IF YOU DO NOT AGREE TO THE TERMS AND CONDITIONS OF '}
                                {'THIS AGREEMENT, THEN YOU MAY NOT ACCESS THE WEBSITE. BY ACCESSING OR USING ANY PART OF THE WEBSITE, YOU '}
                                {'AGREE TO BE BOUND BY THE TERMS AND CONDITIONS OF THIS AGREEMENT.  WHEN YOU CLICK “I ACCEPT” WHEN '}
                                {'DOWNLOADING ANY kix.co.il PRODUCT MATERIALS FROM THE WEBSITE YOU ARE ALSO AGREEING THAT  (1) YOU '}
                                {'ARE AUTHORIZED TO ACCEPT AND AGREE TO THE TERMS OF THIS AGREEMENT AND (2) YOU INTEND TO ENTER INTO AND '}
                                {'TO BE BOUND BY THE TERMS OF THIS AGREEMENT.  IF YOU CLICK ON THE BOX LABELED “I ACCEPT”, YOU WILL '}
                                {'BE GRANTED ACCESS TO THE PRODUCT MATERIALS, AND THIS AGREEMENT WILL BE EFFECTIVE IMMEDIATELY (THE '}
                                {'“EFFECTIVE DATE”). THE WEBSITE IS ONLY AVAILABLE TO INDIVIDUALS WHO ARE AT LEAST 13 YEARS '}
                                {'OLD.TERMS NOT OTHERWISE DEFINED IN THE TEXT OF THIS AGREEMENT SHALL HAVE THE MEANING ASCRIBED TO '}
                                {'THEM AS OTHERWISE DEFINED ON THE WEBSITE. '}
                            </p>

                            <h3>
                                {'1. Acceptable Use '}
                            </h3>

                            <p>
                                {'By accessing and using the Website, you agree to abide by the terms and conditions of the '}
                                <a
                                    href='#acceptable-use-policy'
                                >
                                    <strong>
                                        {'kix.co.il Acceptable Use Policy '}
                                    </strong></a>
                                {', which may be '}
                                {'modified or updated from time to time. '}
                            </p>

                            <h3>
                                {'2. Intellectual Property License and Ownership. '}
                            </h3>

                            <p>
                                {'2.1 License. kix.co.il grants to you a limited, non-transferable, non-sublicensable, revocable license '}
                                {'to access and use the Website subject to the terms and conditions of this Agreement. '}
                            </p>

                            <p>
                                {'2.2 Ownership.  All kix.co.il or third-party intellectual property, and the '}
                                {'accompanying  right, title and interest in and to such intellectual property will remain solely '}
                                {'with kix.co.il and/or the third party, as applicable. Kix Chat, kix.co.il, the kix.co.il logo, '}
                                {'and all other trademarks, service marks, graphics and logos located on the Website are trademarks or '}
                                {'registered trademarks of kix.co.il. Other trademarks, service marks, graphics and logos located on the '}
                                {'Website may be the trademarks of other third parties. Your use of the Website does not transfer any '}
                                {'ownership, rights, or title from kix.co.il to you. '}
                            </p>

                            <h3>
                                {'3. Copyright Infringement and DMCA Policy '}
                            </h3>

                            <p>
                                {'As kix.co.il asks others to respect its intellectual property rights, it respects the intellectual '}
                                {'property rights of others. If you believe that material located on linked to the Website violates your '}
                                {'copyright, you are encouraged to notify kix.co.il in accordance with kix.co.il’s '}
                                <a
                                    href='https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >
                                    {'Digital Millennium Copyright Act '}
                                </a>
                                {'(“DMCA”) Policy. kix.co.il will '}
                                {'respond to all such notices, including as required or appropriate by removing the infringing material or '}
                                {'disabling all links to the infringing material. kix.co.il may terminate access to and use of the '}
                                {'Website if, under appropriate circumstances, it is determined to be a repeat infringer of the copyrights '}
                                {'or other intellectual property rights of kix.co.il or others. In the case of such termination, '}
                                {'kix.co.il will have no obligation to provide a refund of any amounts previously paid to kix.co.il. '}
                            </p>

                            <h3>
                                {'4. Disclaimer of Warranties '}
                            </h3>

                            <p>
                                {'THE kix.co.il WEBSITE IS PROVIDED “AS IS.” kix.co.il AND ITS SUPPLIERS AND LICENSORS HEREBY DISCLAIM '}
                                {'ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE WARRANTIES OF '}
                                {'MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. NEITHER kix.co.il NOR ITS '}
                                {'SUPPLIERS OR LICENSORS, MAKE ANY WARRANTY THAT THE kix.co.il WEBSITE WILL BE ERROR FREE OR '}
                                {'THAT  ITS AVAILABILITY WILL BE CONTINUOUS OR UNINTERRUPTED. '}
                            </p>

                            <h3>
                                {'5. Termination '}
                            </h3>

                            <p>
                                {'kix.co.il may terminate your access to all or any part of the Website at any time, with or without '}
                                {'cause, with or without notice, effective immediately. All provisions of this Agreement which by their '}
                                {'nature should survive termination shall survive termination, including, without limitation, intellectual '}
                                {'property ownership provisions, warranty disclaimers, indemnification obligations and limitations of '}
                                {'liability. '}
                            </p>

                            <h3>
                                {'6. Limitation of Liability '}
                            </h3>

                            <p>
                                {'IN NO EVENT WILL kix.co.il, ITS AFFILIATES, SUPPLIERS, OR LICENSORS, BE LIABLE TO YOU WITH RESPECT TO '}
                                {'YOUR ACCESS OR USE OR OF THE WEBSITE UNDER ANY THEORY OF CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHER '}
                                {'LEGAL OR EQUITABLE THEORY FOR: (I) ANY SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES; (II) THE COST OF '}
                                {'PROCUREMENT FOR SUBSTITUTE PRODUCTS OR SERVICES; (III) INTERRUPTION OF USE OR LOSS OR CORRUPTION OF '}
                                {'DATA; OR (IV) ANY FOR ANY DAMAGES WHATSOEVER. kix.co.il SHALL HAVE NO LIABILITY FOR ANY FAILURE OR '}
                                {'DELAY DUE TO MATTERS BEYOND ITS REASONABLE CONTROL.THE FOREGOING SHALL NOT APPLY TO THE EXTENT '}
                                {'PROHIBITED BY APPLICABLE LAW. '}
                            </p>

                            <h3>
                                {'7. Indemnification '}
                            </h3>

                            <p>
                                {'You agree to indemnify and hold harmless kix.co.il, its affiliates, contractors, and its licensors, and '}
                                {'their respective directors, officers, employees and agents from and against any and all claims and '}
                                {'expenses, including attorneys’ fees, arising out of your use of the kix.co.il Website, including but '}
                                {'not limited to your violation of this Agreement. '}
                            </p>

                            <h3>
                                {'8. Miscellaneous '}
                            </h3>

                            <p>
                                {'This Agreement constitutes the entire agreement between kix.co.il and you, concerning your access and '}
                                {'use of the Website This Agreement will be governed by the laws of the State of California, U.S.A., '}
                                {'excluding its conflict of law provisions, and the proper venue for any disputes arising out of or '}
                                {'relating to any of the same will be the State and Federal courts located in San Francisco County, '}
                                {'California.Except for claims for injunctive or equitable relief or claims regarding intellectual '}
                                {'property rights (which may be brought in any competent court without the posting of a bond), any dispute '}
                                {'arising under this Agreement shall be finally settled in accordance with the Comprehensive Arbitration '}
                                {'Rules of the Judicial Arbitration and Mediation Service, Inc. (“JAMS”) by one arbitrator appointed in '}
                                {'accordance with such Rules. The arbitration shall take place in San Francisco, California, in the '}
                                {'English language and the arbitral decision may be enforced in any court. The prevailing party in any '}
                                {'action or proceeding to enforce this Agreement shall be entitled to costs and attorneys’ fees. If any '}
                                {'part of this Agreement is held invalid or unenforceable, that part will be construed to reflect the '}
                                {'parties’ original intent, and the remaining portions will remain in full force and effect. A waiver by '}
                                {'either party of any term or condition of this Agreement or any breach thereof, in any one instance, will '}
                                {'not waive such term or condition or any subsequent breach thereof. '}
                            </p>

                            <h1 id={'acceptable-use-policy'}>
                                {'kix.co.il ACCEPTABLE USE POLICY '}
                            </h1>

                            <h4 id='h-effective-as-of-october-8-2021'>
                                {'Effective as of October 8, 2021 '}
                            </h4>

                            <p>
                                {'This Acceptable Use Policy (“Policy”) governs your use of the kix.co.il Website and the Product '}
                                {'Materials and Services offered thereon and/or downloaded therefrom. We may modify the Policy by posting '}
                                {'a revised version on the Website. By accessing and/or using the Website and/or any kix.co.il Product '}
                                {'Materials or Services, you agree to be bound by the most current version of this Policy. Capitalized '}
                                {'terms used herein, but not defined in this Policy shall have the same meaning as set forth in the '}
                                {'kix.co.il Terms of Use. '}
                            </p>

                            <p>
                                {'You may not use, or facilitate or allow others to use, the Website or any Product Materials or '}
                                {'Services: '}
                            </p>

                            <ul>
                                <li>
                                    {'For any unlawful or fraudulent activity; '}
                                </li>
                                <li>
                                    {'To impede on or violate the rights of others; '}
                                </li>
                                <li>
                                    {'To threaten, incite, promote, or encourage violence or terrorism; '}
                                </li>
                                <li>
                                    {'For distribution of content or activity that is harmful to minors; '}
                                </li>
                                <li>
                                    {'For distribution or facilitation of the sending of unsolicited mass messages, promotions, '}
                                    {'advertisements, or solicitations (“spam”); '}
                                </li>
                                <li>
                                    {'To mine for a cryptocurrency or blockchain; '}
                                </li>
                                <li>
                                    {'to violate the security or integrity of any computer, network or communications system; '}
                                </li>
                                <li>
                                    {'To distribute harmful or offensive content that is defamatory, obscene, profane, abusive, an '}
                                    {'invasion of privacy or harassing; '}
                                </li>
                                <li>
                                    {'In any way that would be harmful, overburdening of its resources or otherwise impair its '}
                                    {'functionality. '}
                                </li>
                            </ul>

                            <p>
                                <strong>
                                    {'Reporting Violations of this Policy. '}
                                </strong>
                            </p>

                            <p>
                                {'The safety and security of all of our users, and everyone in the community is of utmost importance to us. '}
                                {'If you become aware of any violations of this Policy, you can submit a report to '}
                                <a href='mailto:support@kix.co.il'>
                                    {'support@kix.co.il '}
                                </a>
                                {'. '}
                            </p>

                            <p>
                                <strong>
                                    {'Investigation and Enforcement. '}
                                </strong>
                            </p>

                            <p>
                                {'kix.co.il may investigate any suspected violation of this Policy, and remove or disable access to any '}
                                {'content or resource that violates this Policy. You agree to cooperate with us to remedy any suspected '}
                                {'violation.Determinations of whether there has been a violation of this Policy will be made at '}
                                {'kix.co.il’s sole discretion. '}
                            </p>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}
