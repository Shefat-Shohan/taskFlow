import { UniqueIdentifier } from "@dnd-kit/core"

export type DNDTypes ={
  id: UniqueIdentifier;
  title: string;
  items: {
    id: UniqueIdentifier,
    title: string,
  }[]
}
