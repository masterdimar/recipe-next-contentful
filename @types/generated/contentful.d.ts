// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IRecipeFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Thumbnail */
  thumbnail: Asset;

  /** Feature Image */
  featureImage?: Asset | undefined;

  /** Ingredients */
  ingredients: string[];

  /** Steps */
  steps: Document;

  /** Tag */
  tag?: string[] | undefined;

  /** Video */
  video?: string | undefined;
}

export interface IRecipe extends Entry<IRecipeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "recipe";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "recipe";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
