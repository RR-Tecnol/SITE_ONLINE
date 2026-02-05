
export const sendContactEmail = async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) => {
    const keyPart1 = import.meta.env.VITE_KEY_PART_1 || '';
    const keyPart2 = import.meta.env.VITE_KEY_PART_2 || '';
    const apiKey = keyPart1 + keyPart2;
    const endpoint = "https://api.brevo.com/v3/smtp/email";

    const body = {
        sender: {
            name: "Site RR Tecnol",
            email: "contato@rrtecnol.com.br",
        },
        to: [
            {
                email: "contato@rrtecnol.com.br",
                name: "RR Tecnol",
            },
        ],
        subject: `Novo contato pelo site: ${data.subject}`,
        htmlContent: `
      <html>
        <body>
          <h2>Nova mensagem de contato</h2>
          <p><strong>Nome:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Assunto:</strong> ${data.subject}</p>
          <hr />
          <h3>Mensagem:</h3>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        </body>
      </html>
    `,
    };

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "accept": "application/json",
                "api-key": apiKey,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Erro ao enviar e-mail");
        }

        return await response.json();
    } catch (error) {
        console.error("Erro no envio:", error);
        throw error;
    }
};
