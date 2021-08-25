import {
  Center,
  Heading,
  Box,
} from '@chakra-ui/react';

import { createClient, EntryCollection } from 'contentful'
import { IRecipe } from '../@types/generated/contentful';
import RecipeCard from '../components/recipeCard';

export async function getStaticProps()
{
  const clientContentful = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })  
  
  const res: EntryCollection<IRecipe>  = await clientContentful.getEntries<IRecipe>({ content_type: "recipe"})

  return{
    props: {
      recipes: res.items
    },
    revalidate: 100,
  }
}

export default function Recipes( props: Props) {  
  return (
      <Box className="recipe-list">
        {
          props.recipes.map((recipe: IRecipe) => (
            <RecipeCard key={recipe.sys.id} recipe={recipe.fields}></RecipeCard>
          ))
        }
      </Box>   
  );
}

interface Props{
  recipes: IRecipe[]
}