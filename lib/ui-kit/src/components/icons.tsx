import React, { FC } from 'react';

import { FontAwesomeIcon as IconComponent, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
export * as RegularIcons from "@fortawesome/free-regular-svg-icons";
export const FontAwesomeIcon: FC<FontAwesomeIconProps> = (props) => (<IconComponent {...props} />);

