/**
 * Binary animation utilities for FAKE Tek components
 * 
 * Configuration:
 * - DIGIT_DENSITY: Controls how many binary digits appear (0.0-1.0)
 * - UPDATE_RATE: How often digits change (milliseconds)
 * - FONT_SIZE: Base font size for binary digits
 */

export interface BinaryConfig {
  density?: number; // 0.0 to 1.0
  updateRate?: number; // milliseconds
  fontSize?: number; // pixels
  colors?: {
    primary: string;
    secondary: string;
    glow: string;
  };
}

export const DEFAULT_BINARY_CONFIG: Required<BinaryConfig> = {
  density: 0.15, // 15% of cells filled
  updateRate: 100, // Update every 100ms
  fontSize: 14,
  colors: {
    primary: '#4F8CFF', // electric-blue
    secondary: '#6B5CFF', // signal-purple
    glow: '#EDEFF6', // soft-white
  },
};

/**
 * Generate a random binary digit (0 or 1)
 */
export function randomBinary(): string {
  return Math.random() > 0.5 ? '1' : '0';
}

/**
 * Generate a grid of binary digits
 */
export function generateBinaryGrid(
  width: number,
  height: number,
  cellSize: number,
  density: number = DEFAULT_BINARY_CONFIG.density
): Array<{ x: number; y: number; value: string }> {
  const cols = Math.floor(width / cellSize);
  const rows = Math.floor(height / cellSize);
  const grid: Array<{ x: number; y: number; value: string }> = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (Math.random() < density) {
        grid.push({
          x: col * cellSize,
          y: row * cellSize,
          value: randomBinary(),
        });
      }
    }
  }

  return grid;
}

/**
 * Update binary values in a grid (randomly change some digits)
 */
export function updateBinaryGrid(
  grid: Array<{ x: number; y: number; value: string }>,
  updateChance: number = 0.3 // 30% chance to update each digit
): void {
  grid.forEach((cell) => {
    if (Math.random() < updateChance) {
      cell.value = randomBinary();
    }
  });
}

/**
 * Get a random color from the palette
 */
export function getRandomColor(palette: string[]): string {
  return palette[Math.floor(Math.random() * palette.length)];
}

/**
 * Calculate opacity based on position (for fade effects)
 */
export function calculateOpacity(
  progress: number, // 0.0 to 1.0
  startFade?: number, // when to start fading (0.0-1.0)
  endFade?: number // when to end fading (0.0-1.0)
): number {
  if (startFade === undefined || endFade === undefined) {
    return 1.0;
  }

  if (progress < startFade) {
    return 1.0;
  }
  if (progress > endFade) {
    return 0.0;
  }

  const fadeProgress = (progress - startFade) / (endFade - startFade);
  return 1.0 - fadeProgress;
}

/**
 * Easing functions for smooth animations
 */
export const easing = {
  easeInOut: (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeOut: (t: number): number => {
    return t * (2 - t);
  },
  easeIn: (t: number): number => {
    return t * t;
  },
};
