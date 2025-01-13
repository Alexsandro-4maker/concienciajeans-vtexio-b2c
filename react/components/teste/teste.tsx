import React, { useState, useEffect } from 'react';

const NewsletterForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    // Atualizar estado com base no tamanho da janela
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert('Você deve aceitar os termos de uso.');
            return;
        }
        console.log({ email, gender, termsAccepted });
    };

    const styles = {
        container: {
            backgroundColor: '#071D49',
            color: '#ffffff',
            padding: isMobile ? '30px 10px' : '60px 20px',
            textAlign: 'center' as const,
            fontFamily: 'Arial, sans-serif',
            marginBottom: '-10px',
        },
        title: {
            marginBottom: '20px',
            fontSize: isMobile ? '18px' : '19px',
            fontFamily: 'Montserrat',
            fontWeight:'300'
        },
        form: {
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
        },
        emailInput: {
            padding: '10px',
            border: '1px solid #ffffff',
            outline: 'none',
            width: isMobile ? '250px' : '250px',
            height: '35px',
            marginTop: isMobile ? '10px' : '10pxw',
            background: 'rgb(7, 29, 73)'
        },
        submitButton: {
            padding: '10px 20px',
            backgroundColor: '#EFEFEF',
            color: '#0b1941',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            height: '35px',
            margin: isMobile ? '15px' : '0',
            width: isMobile ? '250px' : '250px',
        },
        containerSex: {
            display: 'flex',
            gap: '10px'
        },
        sexInput:{
            marginRight:'5px'
        },

        terms:{
            display: 'flex',
            marginTop: '20px',
            gap: '10px',
            alignItems:'center',
            fontFamily: 'Montserrat',
            fontSize: '14px'
        },
        containerInput:{
            display: 'flex',
            flexDirection: 'column' as const,
            marginTop: '20px',
            gap: '10px',
            fontFamily: 'Montserrat',
            alignItems:'baseline' as const,
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>RECEBA NOSSAS NOVIDADES</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.containerSex}>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Feminino"
                            checked={gender === 'Feminino'}
                            onChange={(e) => setGender(e.target.value)}
                            style={styles.sexInput}
                        />
                        Feminino
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Masculino"
                            checked={gender === 'Masculino'}
                            onChange={(e) => setGender(e.target.value)}
                            style={styles.sexInput}
                        />
                        Masculino
                    </label>
                </div>
                <div style={styles.containerInput}>
                    <input
                        type="email"
                        placeholder="Insira seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.emailInput}
                        required
                    />
                    <button type="submit" style={styles.submitButton}>
                        CADASTRAR
                    </button>
                </div>
                <div>
                    <label style={styles.terms} >
                        <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                        />
                        Li e concordo com os{' '}
                        <a href="#" style={{ color: '#ffffff', textDecoration: 'underline' }}>
                            termos de uso
                        </a>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default NewsletterForm;
