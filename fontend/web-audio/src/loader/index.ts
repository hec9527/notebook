const files = [
  // 'count',
  // 'hit',
  // 'move',
  // 'over',
  // 'pause',
  // 'pick',
  // 'shot',
  'start',
] as const;

type Files = typeof files[number];

type Sounds = { [key in Files]: AudioBuffer };

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

class AudioLoader {
  private sounds = {} as Sounds;
  private playing: Set<Files> = new Set();

  public setSound(sound: Files, buffer: AudioBuffer) {
    this.sounds[sound] = buffer;
  }

  public play(file: Files) {
    if (this.playing.has(file)) return;
    const source = audioCtx.createBufferSource();

    source.buffer = this.sounds[file];
    source.connect(audioCtx.destination);
    source.start(0);
    source.onended = () => this.playing.delete(file);
    this.playing.add(file);
  }
}

const audio = new AudioLoader();

export default function () {
  const fetchAudio = (src: Files) => {
    return fetch(`/audio/${src}.wav`)
      .then(res => res.arrayBuffer())
      .then(res => audioCtx.decodeAudioData(res))
      .then(res => audio.setSound(src, res));
  };

  return new Promise<AudioLoader>(resolve => {
    Promise.all(files.map(fetchAudio)).then(() => resolve(audio));
  });
}

export { audio };
