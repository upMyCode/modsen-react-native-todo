import React, { useEffect, useState } from 'react';
import type { StatusBarStyle } from 'react-native';
import { Platform, StatusBar } from 'react-native';

export default function ManagedStatusBar() {
  const STYLES = ['default', 'light-content'] as const;
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0]
  );

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[1]);
    }
  }, []);
  return <StatusBar backgroundColor="#646FD4" barStyle={statusBarStyle} />;
}
