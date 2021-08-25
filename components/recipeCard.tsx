import {
    Box,
    Link,
  } from '@chakra-ui/react';
import { IRecipeFields } from '../@types/generated/contentful';

const RecipeCard = (props: Props) => {
    return(
        <Box>
            { props.recipe.title }
            <Box>
                <Link href={'/recipes/' + props.recipe.slug}>cook</Link>
            </Box>
        </Box>
    )
};

interface Props{
    recipe: IRecipeFields
}

export default RecipeCard;

