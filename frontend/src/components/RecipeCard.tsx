import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

interface RecipeCardProps {
    title: string;
    description: string;
    imageUrl: string;
    url: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, description, imageUrl, url }) => {
    return (
        <Card>
            <CardMedia src={imageUrl} component={"img"} height={'200px'}></CardMedia>
            <CardContent>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" component="div">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <a>{url}</a>
            </CardActions>
        </Card>
    );
};

export default RecipeCard