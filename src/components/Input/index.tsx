import { useState } from "react";
import * as S from "./style";

type InputType = "text" | "password" | "email" | "number" | "gender" | "date";

type InputProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  type?: InputType;
  id?: string;
};

export function Input({
  label,
  placeholder,
  value,
  onChange,
  type,
  id,
  ...rest
}: InputProps) {
  const [text, setText] = useState(value || "");
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const inputValue = e.target.value;

    if (type === "date") {
      const newValue = e.target.value;
      const year = newValue.slice(0, 4);

      if (year.length === 4) {
        const parsedYear = parseInt(year, 10);

        if (parsedYear < 1900 || parsedYear > 2099) {
          console.warn("Ano inválido! Escolha entre 1900 e 2099.");
          return;
        }
      }
    }

    setText(inputValue);
    setSelectedOption(inputValue);
    onChange?.(e);
  };

  function LabelContent() {
    return <S.Label htmlFor={id}>{label}</S.Label>;
  }
  return (
    <S.Container>
      <LabelContent />
      <S.Wrapper>
        {type === "gender" ? (
          <S.Select
            id={id || label.replace(/\s+/g, "-").toLowerCase()}
            value={text}
            onChange={handleChange}
            isSelected={selectedOption !== ""}
            {...rest}
          >
            <option value="">Selecione o gênero</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </S.Select>
        ) : type === "date" ? (
          <S.Input
            required
            id={id || label.replace(/\s+/g, "-").toLowerCase()}
            type="date"
            value={text}
            onChange={handleChange}
            pattern="^(19|20)\d{2}-\d{2}-\d{2}$"
            {...rest}
          />
        ) : (
          <S.Input
            required
            id={id || label.replace(/\s+/g, "-").toLowerCase()}
            value={text}
            placeholder={placeholder}
            onChange={handleChange}
            {...rest}
          />
        )}
      </S.Wrapper>
    </S.Container>
  );
}
