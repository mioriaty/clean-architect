import { BoxShadowEntity } from "@/domain/entities/BoxShadow";

export function updateBoxShadow(
  boxShadow: BoxShadowEntity,
  props: Partial<BoxShadowEntity>,
): BoxShadowEntity {
  return {
    ...boxShadow,
    ...props,
  };
}