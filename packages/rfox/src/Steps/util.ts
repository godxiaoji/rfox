export const getStepsClasses = ({
  dot,
  horizontal
}: {
  dot?: boolean
  horizontal?: boolean
}) => ['fx-steps', { dot: !!dot, horizontal: !!horizontal }]

export const getStepClasses = ({
  active,
  finish
}: {
  active: boolean
  finish: boolean
}) => ['fx-step', 'fx-horizontal-hairline', { active, finish }]
