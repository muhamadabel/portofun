// Jembatan ringan antara smooth-scroll (Lenis, di DOM) dan scene 3D (useFrame).
// Dipakai biar kamera/objek 3D bisa react ke posisi scroll tanpa re-render React.
export const scrollState = {
  progress: 0, // 0..1 sepanjang halaman
  velocity: 0, // kecepatan scroll (buat efek goyang ombak)
}

// Audio visualizer level (0..1), di-update dari analyser di AudioToggle.
export const audioState = {
  level: 0,
  playing: false,
}

// Warna aksen aktif (bisa diganti pengunjung via AccentSwitcher). Dibaca Star3D.
export const theme = {
  accent: '#1e3ae0',
}
