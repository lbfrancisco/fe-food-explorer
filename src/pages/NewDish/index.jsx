import { useState } from "react";
import { Container, CustomInputFile, InputContainer, TagsContainer, Wrapper } from "./styles";
import { ArrowLeft, Upload } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import TagItem from "../../components/TagItem";
import { api } from "../../services/api";

export default function NewDish() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [category, setCategory] = useState('#');
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  function handleAddIngredientTag() {
    if (!currentIngredient) return;

    const newIngredientsArray = [...ingredients, { name: currentIngredient }];
    setIngredients(newIngredientsArray);
    setCurrentIngredient('');
  }

  function handleRemoveIngredientTag(index) {
    const newIngredientsArray = ingredients.filter((ingredient, i) => i !== index);
    setIngredients(newIngredientsArray);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!name || !description || ingredients.length === 0 || !price || !category) {
      return alert('Por favor, preencha todos os campos digitáveis!');
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', Number(price).toFixed(2).replace('.', ','));
      formData.append('category_id', category);
      formData.append('ingredients', JSON.stringify(ingredients));

      if (image) {
        formData.append('image', image);
      }

      await api.post('/dishes', formData);

      alert('Prato criado com sucesso');
      navigate('/');
    } catch(error) {
      alert('Ocorreu um erro ao criar seu prato. Tente novamente!');
      console.log(error);
    }
  }

  function handleChangeDishImage(event) {
    const file = event.target.files[0];

    if (!file) return;

    setImage(file);
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
              onChange={handleChangeDishImage}
            />
            <Upload size={24} color="#fff"/>
          {image ? (
            <span>{image.name}</span>
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
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="input-select">
            Categoria
          </label>
          <select
            id="input-select"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="#" disabled selected>Selecione uma categoria...</option>
            <option value="1">Refeições</option>
            <option value="2">Sobremesas</option>
            <option value="3">Bebidas</option>
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
                  value={ingredient.name}
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
            placeholder="R$ 00,00"
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
        onClick={handleSubmit}
      >
        Criar novo prato
      </button>
    </Container>
  );
}
