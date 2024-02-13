import { useEffect, useState } from "react";
import { Container, CustomInputFile, InputContainer, TagsContainer, Wrapper } from "./styles";
import { ArrowLeft, Upload } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TagItem from "../../components/TagItem";

import { api } from "../../services/api";

export default function EditDish() {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('#');

  const [categories, setCategories] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadDish() {
      const { id } = params;

      try {
        const categoryResponse = await api.get('/categories');
        const { categories } = categoryResponse.data;

        setCategories(categories);

        const dishResponse = await api.get(`/dishes/${id}`);
        const { dishes } = dishResponse.data;

        dishes.map((dish) => {
          setName(dish.name);
          setDescription(dish.description);
          setPrice(dish.price.replace(',', '.'));
          setIngredients(dish.ingredients_list.split(','));

          if (categories.length > 0) {
            const categoryMatch = categories.find((category) => category.name === dish.category_name);
            setCategory(categoryMatch.id);
          }


        });
      } catch {
        alert(`Erro ao obter informações.`);
      }
    }

    loadDish();
  }, []);

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

  function handleSubmit() {

  }

  async function handleDeletePlate() {
    const { id } = params;

    try {
      const response = await api.delete('/dishes/' + id);
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
            {categories && categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              );
            })}
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
          type="submit"
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
