import { DeliveryIcon, JobIcon, PhoneIcon } from "@/components/svg";
import cls from "./main-profiles.module.scss";

const MainProfiles = () => {
	return (
		<div className="container">
			<div className={cls.main_profile_wrapper}>
				<div className={cls.title}>
					<h1>Основные профили</h1>
				</div>
				<div className={cls.profile_wrapper}>
					<div className={cls.profile_grid}>
						<div className={cls.profile_item}>
							<div className={cls.profile_img}>
								<JobIcon />
							</div>
							<div className={cls.profile_info}>
								<h2 className={cls.title}>Директор ресторана</h2>
								<p className={cls.profile_desc}>
									<div>
										<p>
											Директор ресторана это инициативный руководитель, который
											может выстроить эффективную работу в ресторане, научит
											каждого сотрудника своей команды работать легко, быстро и
											правильно, создаст приятную, мотивирующую атмосферу в
											коллективе, наведет порядок как во всех бизнес- и
											производственных процессах и на территории кухни и зала.
											<br />
											<br />
											Директор ресторана работает по стандартам и нормативам
											компании, но всегда готов предлагать и свои идеи по
											усовершенствованию и продвижению своего филиала.
										</p>
									</div>
								</p>
							</div>
						</div>
						<div className={cls.profile_item}>
							<div className={cls.profile_img}>
								<JobIcon />
							</div>
							<div className={cls.profile_info}>
								<h2 className={cls.title}>Директор ресторана</h2>
								<p className={cls.profile_desc}>
									<div>
										<p>
											Директор ресторана это инициативный руководитель, который
											может выстроить эффективную работу в ресторане, научит
											каждого сотрудника своей команды работать легко, быстро и
											правильно, создаст приятную, мотивирующую атмосферу в
											коллективе, наведет порядок как во всех бизнес- и
											производственных процессах и на территории кухни и зала.
											<br />
											<br />
											Директор ресторана работает по стандартам и нормативам
											компании, но всегда готов предлагать и свои идеи по
											усовершенствованию и продвижению своего филиала.
										</p>
									</div>
								</p>
							</div>
						</div>
						<div className={cls.profile_item}>
							<div className={cls.profile_img}>
								<DeliveryIcon />
							</div>
							<div className={cls.profile_info}>
								<h2 className={cls.title}>Директор ресторана</h2>
								<p className={cls.profile_desc}>
									<div>
										<p>
											Директор ресторана это инициативный руководитель, который
											может выстроить эффективную работу в ресторане, научит
											каждого сотрудника своей команды работать легко, быстро и
											правильно, создаст приятную, мотивирующую атмосферу в
											коллективе, наведет порядок как во всех бизнес- и
											производственных процессах и на территории кухни и зала.
											<br />
											<br />
											Директор ресторана работает по стандартам и нормативам
											компании, но всегда готов предлагать и свои идеи по
											усовершенствованию и продвижению своего филиала.
										</p>
									</div>
								</p>
							</div>
						</div>
						<div className={cls.profile_item}>
							<div className={cls.profile_img}>
								<PhoneIcon />
							</div>
							<div className={cls.profile_info}>
								<h2 className={cls.title}>Директор ресторана</h2>
								<p className={cls.profile_desc}>
									<div>
										<p>
											Директор ресторана это инициативный руководитель, который
											может выстроить эффективную работу в ресторане, научит
											каждого сотрудника своей команды работать легко, быстро и
											правильно, создаст приятную, мотивирующую атмосферу в
											коллективе, наведет порядок как во всех бизнес- и
											производственных процессах и на территории кухни и зала.
											<br />
											<br />
											Директор ресторана работает по стандартам и нормативам
											компании, но всегда готов предлагать и свои идеи по
											усовершенствованию и продвижению своего филиала.
										</p>
									</div>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainProfiles;
