import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert('Você deve aceitar os termos de uso.');
            return;
        }
        // Aqui você pode adicionar a lógica de envio do formulário
        console.log({ email, gender, termsAccepted });
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>RECEBA NOSSAS NOVIDADES</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.radioContainer}>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            name="gender"
                            value="Feminino"
                            checked={gender === 'Feminino'}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Feminino
                    </label>
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            name="gender"
                            value="Masculino"
                            checked={gender === 'Masculino'}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Masculino
                    </label>
                </div>
                <div style={styles.emailContainer}>
                    <input
                        type="email"
                        placeholder="Insira seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.emailInput}
                        required
                    />
                    <button type="submit" style={styles.submitButton}>CADASTRAR</button>
                </div>
                <div style={styles.termsContainer}>
                    <label style={styles.termsLabel}>
                        <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                        />
                        Li e concordo com os <a href="#" style={styles.termsLink}>termos de uso</a>
                    </label>
                </div>
            </form>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        backgroundColor: '#071D49',
        color: '#ffffff',
        padding: ' 60px 20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        marginBottom: '-10px'
    },
    title: {
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    radioContainer: {
        display: 'flex',
        gap: '20px',
        marginBottom: '20px',
    },
    radioLabel: {
        fontSize: '14px',
        display: 'flex',
        gap: '5px'
    },
    emailContainer: {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
    },
    emailInput: {
        padding: '10px',
        border: '1px solid #ffffff',
        outline: 'none',
        width: '330px',
        height: '35px'
    },
    submitButton: {
        padding: '10px 20px',
        backgroundColor: '#EFEFEF',
        color: '#0b1941',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        height: "35px",
        width: "180px"
    },
    termsContainer: {
        marginTop: '10px',
    },
    termsLabel: {
        fontSize: '12px',
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
    },
    termsLink: {
        color: '#ffffff',
        textDecoration: 'underline',
    },
};

export default NewsletterForm;
