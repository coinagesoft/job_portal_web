import Image from 'next/image';
import Link from 'next/link';

const HeroProfile = ({ profileData, completionPercent }) => {
  const avatarSrc = profileData.avatar || '/assets/imgs/page/candidates/candidate-profile.png';
  const displayName = profileData.name || 'Candidate Profile';
  const displayLocation = profileData.address?.current ? profileData.address.current.split(',')[0] : 'New York, US';
  const displayTitle = profileData.experience?.trade || profileData.preferences?.role || 'Skilled Professional';

  return (
    <section className="section-box-2">
      <div className="container">
        <div className="banner-hero banner-image-single">
          <Image
            src="/assets/imgs/page/candidates/img.png"
            alt="jobBox"
            width={1200}
            height={400}
            className="img-responsive"
          />
          <Link className="btn-editor" href="#" />
        </div>
        <div className="box-company-profile">
          <div className="image-compay">
            <Image
              src={avatarSrc}
              alt="Profile Avatar"
              width={100}
              height={100}
              className="img-responsive border-radius"
            />
          </div>
          <div className="row mt-10">
            <div className="col-lg-8 col-md-12">
              <h5 className="f-18">
                {displayName} 
                <span className="card-location font-regular ml-20">{displayLocation}</span>
              </h5>
              <p className="mt-0 font-md color-text-paragraph-2 mb-15">
                {displayTitle}
              </p>
              <div className="profile-progress mt-15">
                <div className="progress-label-small">
                  <span>Completion:</span>
                  <span className="font-bold ml-10 color-brand-1">{completionPercent}%</span>
                </div>
                <div className="progress-bar-small">
                  <div 
                    className="progress-fill-small" 
                    style={{ width: `${completionPercent}%` }}
                  >
                    {completionPercent === 100 && <span>Complete!</span>}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 text-lg-end">
              <Link className="btn btn-preview-icon btn-apply btn-apply-big" href="/candidate-profile/preview">
                 Preview Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="border-bottom pt-10 pb-10"></div>
      </div>
    </section>
  );
};

export default HeroProfile;



