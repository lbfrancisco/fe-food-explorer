import { useEffect, useState } from "react";
import { Container, CustomInputFile, InputContainer, TagsContainer, Wrapper } from "./styles";
import { ArrowLeft, Upload } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TagItem from "../../components/TagItem";

import { api } from "../../services/api";

export default function EditDish() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [category, setCategory] = useState('#');
  const [image, setImage] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadDish() {
      const { id } = params;

      try {
        const dishResponse = await api.get(`/dishes/${id}`);
        const { dishes } = dishResponse.data;

        console.log(dishes[0]);

        setName(dishes[0].name);
        setDescription(dishes[0].description);
        setCategory(getCategoryIdByName(dishes[0].category_name));
        setPrice(dishes[0].price.replace(',', '.'));

        if (dishes[0].ingredients_list.length > 0) {
          const ingredientsArray = dishes[0].ingredients_list.split(',');
          const formattedIngredients = ingredientsArray.map(ingredient => {
            return { name: ingredient.trim() };
          });

          setIngredients(formattedIngredients);
        }
      } catch(error) {
        alert(`Erro ao obter informações.`);
        console.log(error);
      }
    }

    loadDish();
  }, []);

  function getCategoryIdByName(name) {
  switch (name) {
    case 'Refeições':
      return '1';
    case 'Sobremesas':
      return '2';
    case 'Bebidas':
      return '3';
    default:
      return '#';
  }
  }

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

  async function handleSubmit() {
    if (!name || !description || ingredients.length === 0 || !price || !category) {
      return alert('Por favor, preencha todos os campos digitáveis!');
    }

    const fileFormData = new FormData();
    fileFormData.append('image', image);

    const { id } = params;

    try {
      if (!fileFormData.get('image')) {
        await api.put(`/dishes/${id}`, {
          name,
          description,
          price: price.replace('.', ','),
          category_id: category,
          ingredients
        });

        alert('Prato atualizado com sucesso');
        navigate('/');
      } else {
        alert('com form data')
      }
    } catch(error) {
      alert('Ocorreu um erro ao atualizar seu prato. Tente novamente!');
      console.log(error);
    }
  }

  async function handleDeletePlate() {
    const { id } = params;

    try {
      await api.delete(`/dishes/${id}`);
      alert('Prato deletado com sucesso!');
      navigate('/');
    } catch {
      alert('Ocorreu um erro ao deletar esse prato. Tente novamente!');
    }
  }

  return (
    <Container>
      <Link
        to="/"
      >
        <ArrowLeft size={24} color="#E1E1E6" />
        <span>voltar</span>
      </Link>

      <h1>Editar prato</h1>

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
            onChange={(event) => setPrice(event.target.value.toString())}
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

      <Wrapper>
        <button
          id="save"
          type="button"
          onClick={handleSubmit}
        >
          Salvar alterações
        </button>

        <button
          id="delete"
          type="button"
          onClick={handleDeletePlate}
        >
          Excluir prato
        </button>
      </Wrapper>
    </Container>
  );
}
