import { createSlice } from '@reduxjs/toolkit';

const getStyles = (mode) => ({
  mainTheme: {
    backgroundColor: mode === 'dark' ? '#0a0b0c' : '#f6f9fb',
    color: mode === 'dark' ? '#fff' : '#000',
    hoverColor: mode === 'dark' ? '#222' : '#eeeeeeff',
    epicColor: mode === 'dark' ? '#fff' : '#676767',
    chipColor: mode === 'dark' ? '#181820' : '#fff',
    chipBorder:
      mode === 'dark'
        ? '1px solid rgba(82, 82, 82, 1)'
        : '1px solid rgba(180, 180, 180, 1)',
    overlayFadeColor:
      mode === 'dark'
        ? 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)'
        : 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 100%)',
    footerChildBackgroundColor: mode === 'dark' ? '#111116' : '#fff',
    specialHoverColor: mode === 'dark' ? '#0000005b' : '#ffffff5b',
    headerShadowColor: mode === 'dark' ? '#000000d1' : '#dfdfdf'
  },

  activeClass: {
    activeColor: mode === 'dark' ? '#fff' : '#000',
    nonActiveColor: mode === 'dark' ? '#5d5d68' : 'gray',
  },
  icon: {
    color: mode === 'dark' ? '#fff' : '#000',
  },
});

const initialMode = localStorage.getItem('theme') || 'dark';

const initialState = {
  mode: initialMode,
  styles: getStyles(initialMode),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', state.mode);
    },
    setStyles: (state, action) => {
      state.styles = action.payload;
    },
  },
});

export const { toggleTheme, setStyles } = themeSlice.actions;
export default themeSlice.reducer;
