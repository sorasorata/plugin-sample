import React, { useState } from 'react';

import { Alert } from '@twilio-paste/core/alert';
import { Theme } from '@twilio-paste/core/theme';
import { Text } from '@twilio-paste/core/text';

const CustomTaskList = () => {
  const [isOpen, setIsOpen] = useState(true);

  const dismiss = () => setIsOpen(false);

  const openAlert = () => setIsOpen(true);

  return (
    <Theme.Provider theme="default">
      {isOpen && <Alert onDismiss={dismiss} variant="neutral">
        <Text>
          This is a dismissible demo component.
        </Text>
      </Alert>}
      <button onClick={openAlert}>open</button>
    </Theme.Provider>
  );
};

export default CustomTaskList;
