import {
    Box,
    Link,
    Image,
    Heading,
  } from '@chakra-ui/react';
import { IRecipeFields } from '../@types/generated/contentful';

const RecipeCard = (props: Props) => {
    const { thumbnail, title, slug } = props.recipe

    return(
        <Box className="card">
            <Box className="featured">
                <Image 
                src={'https:' + thumbnail.fields.file.url }
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                />
            </Box>
            <Box className="content">
                <Box className="info">
                    <Heading as="h4">{ title }</Heading>
                </Box>
                <Box className="actions">
                <Link href={'/recipes/' + slug}><a>Cook this</a></Link>
                </Box>
            </Box>       
        </Box>        
    )
};

interface Props{
    recipe: IRecipeFields
}

export default RecipeCard;

