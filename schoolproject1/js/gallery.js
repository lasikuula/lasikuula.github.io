class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {images: [], loaded: false};
        this.onLoadClick = this.onLoadClick.bind(this);
        this.peopleClick = this.peopleClick.bind(this);
        this.animalsClick = this.animalsClick.bind(this);
        this.otherClick = this.otherClick.bind(this);
    }

    render() {
        if (!this.state.loaded) {
            return (
                <div class="container">
                <div class="row">
                    <div class="col-sm p-3" href="#">
                    <img class="img-thumbnail cursor" src="gallery/IMG/people/6_thumbnail.jpg" onClick={this.peopleClick}/>
                    <h2 class="cursor" onClick={this.peopleClick}>Ihmiset</h2>           
                    </div>

                    <div class="col-sm p-3">
                    <img class="img-thumbnail cursor" src="gallery/IMG/animals/Rin_thumbnail.jpg" onClick={this.animalsClick}/>
                    <h2 class="cursor" onClick={this.animalsClick}>Eläimet</h2>
                    </div>

                    <div class="col-sm p-3">
                    <img class="img-thumbnail cursor" src="gallery/IMG/people/16_thumbnail.jpg" onClick={this.otherClick}/>
                    <h2 class="cursor" onClick={this.animalsClick}>Muut</h2>

                    </div>
                </div>
            </div>
            );
        }
        return (
                <div class="container pb-2">

                <div class="arrow_box col-3 m-2 text-light"><p class="cursor" onClick={this.onLoadClick}>Takaisin</p></div>
                
                {
                    this.state.images.map((images,index) =>
                        <img key={index} class="img-fluid m-1" width={images.thumbnailWidth} height={images.thumbnailHeight} src={images.thumbnail}/>
                    )
                }
            </div>
        );
    }

    onLoadClick () {
        this.setState({images:[], loaded:false})
    }

    peopleClick() {
        $.ajax({
            url: 'gallery/people.json',
            cache: false,
            dataType: 'json'
        }).done((data) => {
            this.setState({images: data.images, loaded:true});
        }).fail((jqXHR, textStatus, errorThrown) => {
            console.log(textStatus+":"+errorThrown);
        });    
    }

    animalsClick() {
        $.ajax({
            url: 'gallery/animals.json',
            cache: false,
            dataType: 'json'
        }).done((data) => {
            this.setState({images: data.images, loaded:true});
        }).fail((jqXHR, textStatus, errorThrown) => {
            console.log(textStatus+":"+errorThrown);
        });    
    }

    otherClick() {
        $.ajax({
            url: 'gallery/animals.json',
            cache: false,
            dataType: 'json'
        }).done((data) => {
            this.setState({images: data.images, loaded:true});
        }).fail((jqXHR, textStatus, errorThrown) => {
            console.log(textStatus+":"+errorThrown);
        });    
    }
}

ReactDOM.render(
    <Gallery />,
    document.getElementById('gallery')
);