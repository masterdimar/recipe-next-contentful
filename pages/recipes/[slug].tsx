import {
    Box,
  } from '@chakra-ui/react';

import { IRecipe, IRecipeFields } from '../../@types/generated/contentful';

import { createClient, Entry, EntryCollection } from 'contentful'
import { GetStaticProps, GetStaticPropsContext } from 'next';

const clientContentful = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  }) 

export const getStaticPaths = async() => {
    const res = await clientContentful.getEntries({ content_type: 'recipe'})
 
    const paths = res.items.map((recipe:IRecipe) => {
        return {
            params: { slug: recipe.fields.slug }
        }
    })
    return{
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
  ) => {
    const res: EntryCollection<IRecipe> = await clientContentful.getEntries<IRecipe>(
    { 
        content_type: 'recipe',
        'fields.slug': context.params.slug
    });

    if(!res.items || res.items.length)
    {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return{
        props: {
            recipe: res.items[0]
        },
        revalidate: 100
    }
}

export default function RecipeDetails( props: Props)
{
    if(Object.keys(props).length === 0)
        return <Box>Loading</Box>

    return(
        <Box>
            {props.recipe.fields.title}
        </Box>
    )
}

interface Props{
    recipe: IRecipe
}