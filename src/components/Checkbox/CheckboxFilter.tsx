import {
  Checkbox,
  CheckboxGroup,
  Fieldset,
  For,
  HStack,
} from "@chakra-ui/react";
// import { useState, FormEvent } from "react";

import { Dispatch, SetStateAction } from "react";

type CategoriesType = {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
};

export const CategoriesFilter = ({
  categories,
  selectedCategories,
  setSelectedCategories,
}: CategoriesType) => {
  //   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  console.log("selected categories", selectedCategories);

  return (
    <Fieldset.Root display='flex' alignItems='center' mb='4'>
      <CheckboxGroup
        value={selectedCategories}
        // onChange={setSelectedCategories}
        onValueChange={setSelectedCategories}
      >
        <Fieldset.Legend fontSize='sm' mb='2'>
          Select category
        </Fieldset.Legend>
        <Fieldset.Content>
          <HStack>
            <For each={categories}>
              {(value) => (
                <Checkbox.Root key={value} value={value}>
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label>{value}</Checkbox.Label>
                </Checkbox.Root>
              )}
            </For>
          </HStack>
        </Fieldset.Content>
      </CheckboxGroup>
    </Fieldset.Root>
  );
};
