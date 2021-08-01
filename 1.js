const Input = ({ addName }) => {
  const [name, setName] = useState('');
  const inputRef = React.createRef();

  const handlePress = e => {
    if (e.key === 'Enter') {
      console.log('name:', name);
      addName({ name });
      setName('');
    }
  };

  useEffect(() => {
    inputRef.current?.addEventListener('keydown', e => handlePress(e));
    return () => {
      inputRef.current?.removeEventListener('keydown', e => handlePress(e));
    };
  }, []);

  return (
    <div className='input-wrap'>
      <input
        ref={inputRef}
        value={name}
        type='text'
        className='input'
        placeholder='Please input your something'
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
};
