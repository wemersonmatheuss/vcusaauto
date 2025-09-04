import { useState } from "react";
import styles from "./styles.module.css";

import { Button } from "../Button";

const faqs = [
	{
		question: "O curso foi feito para quem?",
		answer: "Para qualquer pessoa interessada em comprar carros em leilão nos EUA, mesmo sem experiência prévia.",
	},
	{
		question: "Necessita ter experiência para entender o curso?",
		answer: "Não, o curso é totalmente didático e pensado para iniciantes.",
	},
	{
		question: "Preciso falar inglês para conseguir comprar?",
		answer: "Não é obrigatório, mas o curso ensina como superar essa barreira.",
	},
	{
		question: "Vou aprender a fazer todo o processo sozinho ou preciso de intermediários?",
		answer: "Você aprenderá todo o processo para comprar sozinho, sem depender de intermediários.",
	},
	{
		question: "Quanto tempo leva, em média, para eu conseguir comprar meu primeiro carro após o curso?",
		answer: "Em média, após concluir o curso, você já estará apto para comprar seu primeiro carro em poucas semanas.",
	},
	{
		question: "Preciso morar nos Estados Unidos para comprar em leilão?",
		answer: "Não, você pode comprar mesmo estando no Brasil ou em outro país, seguindo as orientações do curso.",
	},
];

export function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (idx: number) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<div className={styles.faqContainer}>
			<h2 className={styles.title}>Perguntas Frequentes</h2>
			<div className={styles.questionsBox}>
				{faqs.map((item, idx) => (
					<div key={idx} className={styles.questionItem}>
						<button
                            type="button"
							className={styles.questionBtn}
							onClick={() => handleToggle(idx)}
							aria-expanded={openIndex === idx ? "true" : "false"}
						>
							<span className={styles.arrow}>{openIndex === idx ? "▼" : "▶"}</span>
							{item.question}
						</button>
						{openIndex === idx && (
							<div className={styles.answer}>{item.answer}</div>
						)}
					</div>
				))}
			</div>
            <div className={styles.button}>
			    <Button name="COMPRAR AGORA"/>
            </div>
		</div>
	);
}
