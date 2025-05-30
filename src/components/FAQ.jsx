import FAQ_Accordion from "./FAQ_Accordion.jsx"

const FAQ = () => {
    const faqData = [
        {
            question: "Why should I choose Homify for my smart home needs?",
            answer: "Homify offers an intuitive, customizable smart home experience that integrates with a wide range of smart devices. With control through one app, 24/7 customer support, and professional Custom Home Setup services, Homify delivers maximum flexibility, convenience, and security. Plus, our energy saving features and automation help you."
        },
        {
            question: "Do I need an internet connection to use Homify?",
            answer: "Yes, most Homify features require an internet connection to control devices remotely and receive real-time updates. However, devices connected to your local network can also be controlled manually."
        },
        {
            question: "Is Homify compatible with other smart devices?",
            answer: "Yes, Homify supports a wide range of smart devices from various brands. Our app is designed to work seamlessly with popular products like Amazon Alexa, Google Assistant, and other smart devices."
        },
        {
            question: "Can I install Homify by myself?",
            answer: "Absolutely! Many Homify devices are designed for easy self-installation. However, for more complex setups or advanced customization, we offer a Custom Home Setup service where our professional technicians assist with installation and configuration tailored to your needs."
        },
        {
            question: "How much does it cost to use Homify?",
            answer: "Homify offers various subscription plans, including monthly, quarterly, and annual options. Pricing starts at $49/month depending on your needs. We also offer a Custom Home Setup service starting at $99."
        },
        {
            question: "How does Homify help save energy?",
            answer: "Homify provides Energy Saving Reports that give insights into your energy usage. With smart automation features, like thermostats and smart lighting, you can significantly reduce energy consumption and lower your utility bills."
        }
    ];

    return (
        <section id="faq" className="w-full px-10 py-[6rem]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-[0.5em]" data-aos="zoom-in">FAQ</h2>
            <p className="text-sm text-center mx-auto max-w-[25ch] mb-[1em]" data-aos="fade-down">Questions about Smart Home and Homify Services</p>
            <section className="flex flex-col gap-4">
                {faqData.map((faq, index) => (
                    <FAQ_Accordion key={index} question={faq.question} answer={faq.answer} />
                ))}
            </section>
        </section>
    )
}

export default FAQ