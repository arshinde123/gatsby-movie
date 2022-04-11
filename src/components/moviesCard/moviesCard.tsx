/** External imports */
import * as React from "react";

/** Internal imports */
import Button, { ButtonTypes } from "../common/button";
import Tag from "../common/tag";
import { getDifferenceInDays } from "../../utils/date";

/** Style imports */
import "./style.scss";

export type Movie = {
  id: string;
  title: string;
  poster: string;
  overview: string;
  release_date: number;
  genres: string[];
};

interface MoviesCardProps {
	movie: Movie;
	actionButtonValue: string;
	actionButtonType: ButtonTypes;
	onActionButtonClick: (e: React.SyntheticEvent) => void;
}

/** React FC */
const MoviesCard: React.FC<MoviesCardProps> = (props: MoviesCardProps) => {
	const { movie, actionButtonValue, actionButtonType, onActionButtonClick } = props;

	return (
		<div className="card mb-3 movie-card">
			<div className="row g-0">
				<div className="col-4">
					<img
						src={movie?.poster}
						className="card-img-top"
						alt="Movie poster"
					/>
				</div>
				<div className="col-8">
					<div className="card-body">
						<div className="card-title d-flex justify-content-between align-items-start">
							<h5 className="movie-title">{movie?.title}</h5>
							<Button
								type={actionButtonType}
								classes="btn-sm movie-shortlist-btn"
								value={actionButtonValue}
								onClick={onActionButtonClick}
								outlined
							/>
						</div>
						<p className="card-text movie-overview">{movie?.overview}</p>
						<p className="card-text">
							<small className="text-muted">
								Release date: {getDifferenceInDays(movie?.release_date)} days
								ago
							</small>
						</p>
						<div className="genres">
							{movie?.genres?.length &&
								movie.genres.map(genre => (
									<Tag key={`${movie.id}_${genre}`} value={genre} />
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoviesCard;
