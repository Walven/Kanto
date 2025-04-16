type LabelProps = {
  size?: 'l' | 'm' | 's';
  children: string;
};

export const Label = ({ size, children }: LabelProps) => <span className={`label-${size ?? 'm'}`}>{children}</span>;
