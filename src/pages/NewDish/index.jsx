import { useState } from "react";
import { Container, CustomInputFile, InputContainer, TagsContainer, Wrapper } from "./styles";
import { ArrowLeft, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import TagItem from "../../components/TagItem";

export default function NewDish() {
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  function handleAddIngredientTag() {
    if (!currentIngredient) return;

    const newIngredientsArray = [...ingredients, currentIngredient];
    setIngredients(newIngredientsArray);
    setCurrentIngredient('');
  }

  function handleRemoveIngredientTag(index) {
    const newIngredientsArray = ingredients.filter((ingredient, i) => i !== index);
    setIngredients(newIngredientsArray);
  }

  return (
    <Container>
      <Link
        to="/"
      >
        <ArrowLeft size={24} color="#E1E1E6" />
        <span>voltar</span>
      </Link>

      <h1>Adicionar prato</h1>

      <Wrapper>
        <InputContainer>
          <label htmlFor="input-file">
            Imagem do prato
          </label>
          <CustomInputFile>
            <input
              id="file-upload"
              type="file"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
            <Upload size={24} color="#fff"/>
          {image ? (
            <span>{image.split('\\').pop()}</span>
          ) : (
            <span>Selecione imagem</span>
          )}
        </CustomInputFile>
        </InputContainer>
        <InputContainer>
          <label htmlFor="input-name">
            Nome
          </label>
          <input
            id="input-name"
            placeholder="Ex: Salada Caesar"
            type="text"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="input-select">
            Categoria
          </label>
          <select id="input-select">
            <option value="#" disabled selected>Selecione uma categoria...</option>
            <option value="">Categoria 1</option>
            <option value="">Categoria 2</option>
            <option value="">Categoria 3</option>
          </select>
        </InputContainer>
      </Wrapper>
      <Wrapper>
        <InputContainer>
          <label>
            Ingredientes
          </label>
          <TagsContainer>
            {ingredients.map((ingredient, index) => {
              return (
                <TagItem
                  key={index}
                  value={ingredient}
                  onClick={() => handleRemoveIngredientTag(index)}
                />
              )
            })}
            <TagItem
              value={currentIngredient}
              onChange={(event) => setCurrentIngredient(event.target.value)}
              onClick={handleAddIngredientTag}
              isNew
              placeholder="Digite o nome..."
            />
          </TagsContainer>
        </InputContainer>
        <InputContainer>
          <label htmlFor="input-price">
            Preço
          </label>
          <input
            id="input-price"
            placeholder="R$ 20,00"
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </InputContainer>
      </Wrapper>
      <Wrapper>
        <InputContainer>
          <label htmlFor="input-description">
            Descrição
          </label>
          <textarea
            id="input-description"
            placeholder="Fale brevemente sobre o seu prato..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </InputContainer>
      </Wrapper>

      <button
        id="save"
        type="submit"
      >
        Criar novo prato
      </button>
    </Container>
  );
}
