import Film from "./Film";

export default function Filmler(props) {
  const { char, i, films } = props;

  return (
    <h2>
      <p>
        {films
          .filter((film, i) => char.films.includes(film.title))
          .map((film, i) => {
            return <Film film={film} i={i} />;
          })}
      </p>
    </h2>
  );
}
